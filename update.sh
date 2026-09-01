#!/bin/bash
# Деплой на дроплете, из /sites/scribble. Как у соседних проектов: здесь ничего
# не собирается, образы приезжают из ghcr.io.
set -euo pipefail

# Всё тело в фигурных скобках сознательно. `git reset --hard` переписывает этот
# самый файл, пока bash его выполняет, а bash читает скрипты по мере
# выполнения — после перезаписи он продолжит с байтового смещения, которое уже
# ни на что не показывает, и молча пропустит или покорёжит остаток. Составная
# команда заставляет распарсить всё до запуска первой строки.
{

  cd "$(dirname "$0")"

  COMPOSE="docker compose -f docker-compose.prod.yml"

  env -i git fetch
  env -i git reset --hard remotes/origin/master

  SHA=$(env -i git rev-parse HEAD)
  export IMAGE_TAG="$SHA"
  echo "Выкатываем $SHA"

  # Тянем по sha, а не по latest: пуш в master только запускает сборку, и
  # ближайшие несколько минут latest всё ещё означает предыдущий коммит.
  # С пином деплой либо выкатывает ровно то, что сейчас выкачано, либо
  # отказывается — вместо тихого переезда на вчера.
  if ! $COMPOSE pull backend; then
    echo
    echo "Образ для $SHA не найден в ghcr.io."
    echo "Обычно это значит, что CI ещё не собрал этот коммит (или упал):"
    echo "  https://github.com/Joxter/scribble/actions"
    echo "Дождись зелёной сборки и запусти ./update.sh снова."
    exit 1
  fi

  $COMPOSE up -d backend

  # HTTP-ручки у сервера нет, проверять нечем. Зато почти все способы
  # выкатиться сломанным (битый .env, синтаксис, мёртвая подписка) роняют
  # процесс за первые секунды, а перезапущенный контейнер видно по restarting.
  echo
  echo -n "Проверка: "
  sleep 5

  if ! $COMPOSE ps --status running --services | grep -qx backend; then
    echo "контейнер не работает"
    $COMPOSE logs --tail 20 backend
    echo
    echo "Предыдущий образ ещё на диске — откат:"
    docker images --format '{{.Repository}}:{{.Tag}}' \
      | grep '^ghcr\.io/joxter/scribble/' | grep -v ":$SHA\$" | head -1
    echo "  IMAGE_TAG=<тег выше> $COMPOSE up -d backend"
    exit 1
  fi
  echo "запущен"

  # Только после того, как новый контейнер устоял. Образы помечены по sha,
  # поэтому предыдущий не «висячий» — image prune прошёл бы мимо, и каждый
  # деплой оставлял бы предшественника навсегда. Удалять его до проверки
  # значит остаться при неудачном деплое без отката.
  docker images --format '{{.Repository}}:{{.Tag}}' \
    | grep '^ghcr\.io/joxter/scribble/' \
    | grep -v ":$SHA\$" \
    | xargs -r docker rmi -f > /dev/null 2>&1 || true

  docker image prune -f

}
