import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/PageLayout.tsx";
import { useUnit } from "effector-react";
import {
  $currentPlayers,
  $localId,
  $newParty,
  $partyStatus,
  $player,
  $playerAvatars,
} from "../model/game-new.model.ts";
import { css } from "@linaria/core";
import { TextField } from "../components/TextField.tsx";
import { Button } from "../components/Button.tsx";
import { Select } from "../components/Select.tsx";
import { PlayerFigure } from "../components/PlayerFigure.tsx";
import { AvatarPicker } from "../components/AvatarPicker.tsx";
import { BackgroundDoodle } from "../components/BackgroundDoodle.tsx";
import { parseAvatar } from "../avatar.ts";
import {
  closeParty,
  editUserAvatar,
  editUserName,
  joinToParty,
  kickPlayer,
  leaveParty,
  startParty,
  updateGameParams,
} from "../db-things.ts";
import { Link, useLocation } from "wouter";
import { getUrl } from "../utils.ts";
import { GAME_STATUS } from "../types.ts";
import type { NewParty } from "../model/party.model.ts";
import { DrawingPage } from "./Drawing.page.tsx";
import { FinishedGamePage } from "./FinishedGame.page.tsx";

const notice = css`
  width: 500px;
  max-width: 100%;
  margin: 40px auto 0;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 20px 40px -28px rgba(30, 40, 50, 0.5);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const noticeTitle = css`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.3px;
`;

const noticeText = css`
  font-size: 15px;
  font-weight: 600;
  color: var(--slate);
  margin: 0;
`;

const noticeAction = css`
  margin-top: 6px;
  text-decoration: none;
`;

const layout = css`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 815px) {
    flex-direction: column;
    align-items: stretch;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const card = css`
  width: 500px;
  flex: none;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 20px 40px -28px rgba(30, 40, 50, 0.5);
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 815px) {
    width: 100%;
  }
`;

const cardHeader = css`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const roomLabel = css`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const roomName = css`
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.3px;
  line-height: 1.15;
`;

const hostBadge = css`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: var(--warn-bg);
  color: var(--warn-text);
  border: 1px solid var(--warn-border);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
`;

const linkRow = css`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: var(--sunken);
  border: 1px dashed var(--keycap-edge);
  border-radius: 12px;
  padding: 8px 8px 8px 14px;
`;

const linkText = css`
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--slate);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const copyButton = css`
  margin-left: auto;
  white-space: nowrap;
`;

const characterBlock = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const characterTitle = css`
  font-size: 15px;
  font-weight: 800;
  color: var(--ink);
`;

const paramRow = css`
  display: flex;
  align-items: center;
  gap: 14px;

  & > span {
    width: 130px;
    flex: none;
    font-size: 14px;
    font-weight: 700;
    color: var(--slate);
  }
`;

const paramRows = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const nameField = css`
  flex: 1;
`;

const paramSelect = css`
  width: 150px;
`;

const startHint = css`
  margin: 0;
  text-align: center;
  font-size: 13px;
  color: var(--muted);
`;

const closeRow = css`
  display: flex;
  justify-content: center;
`;

const players = css`
  width: 300px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 6px;

  @media (max-width: 815px) {
    width: 100%;
  }
`;

const playersHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 6px 6px;

  & > span:first-child {
    font-size: 14px;
    font-weight: 800;
    color: var(--slate);
  }

  & > span:last-child {
    font-size: 12px;
    color: var(--muted);
  }
`;

const playerRow = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 6px;

  & > b {
    font-weight: 800;
    font-size: 15px;
  }
`;

const figureSlot = css`
  width: 22px;
  display: flex;
  justify-content: center;
`;

const playerHostBadge = css`
  font-size: 11px;
  color: var(--warn-text);
  font-weight: 800;
  background-color: var(--warn-bg);
  border-radius: 999px;
  padding: 2px 8px;
`;

const rowAction = css`
  margin-left: auto;
  font-family: inherit;
  font-size: 13px;
  font-weight: 800;
  background: transparent;
  border: none;
  border-radius: 9px;
  padding: 6px 10px;
  cursor: pointer;
`;

const kickAction = css`
  color: var(--danger-text);

  &:hover {
    background-color: #fff5f4;
  }
`;

const leaveAction = css`
  color: var(--slate);

  &:hover {
    background-color: var(--sunken);
  }
`;

export function PartyPrepare() {
  const [party, currentPlayers, partyStatus] = useUnit([
    $newParty,
    $currentPlayers,
    $partyStatus,
  ]);
  const player = useUnit($player);
  const localId = useUnit($localId);
  const avatars = useUnit($playerAvatars);
  // свой человечек берётся из профиля: он обновляется сразу после клика
  const myAvatar = player?.avatar || parseAvatar(null, localId);
  const [name, setName] = useState(player?.name || "");
  const [copied, setCopied] = useState(false);

  const [location, navigate] = useLocation();

  useEffect(() => {
    if (player?.name) {
      setName(player.name);
    }
  }, [player]);

  if (!party) {
    // база ещё не ответила: «комнаты нет» здесь было бы враньём
    if (partyStatus !== "missing") {
      return (
        <PageLayout>
          <div className={notice}>
            <span className={noticeTitle}>Открываем комнату…</span>
          </div>
        </PageLayout>
      );
    }

    return (
      <RoomNotice
        title="Комната не найдена"
        text="Похоже, ссылка устарела или комнату уже закрыли."
      />
    );
  }

  // кикнутого не пускаем обратно ни в лобби, ни в идущую игру: ссылка у него
  // осталась, а кнопка «Войти» вернула бы его сразу после кика
  if (party.kicked?.[localId]) {
    return (
      <RoomNotice
        title="Вас исключили"
        text="Хост убрал вас из этой комнаты. Попросите пригласить вас снова или создайте свою."
      />
    );
  }

  if (party.status === GAME_STATUS.inProgress) {
    return <DrawingPage />;
  }

  if (party.status === GAME_STATUS.finished) {
    // комнату закрыли, не начав игру: подиум с нулями показывать не за что,
    // на главную уводит роутер
    if (party.gameProgress.flat().length === 0) return null;

    return <FinishedGamePage />;
  }

  if (party.status !== "prepare") {
    return (
      <RoomNotice
        title="Комната закрыта"
        text="Эта игра уже идёт или закончилась."
      />
    );
  }

  // пришли по ссылке-приглашению: в комнате нас ещё нет. Вход — кнопкой, а не
  // сам собой: автовход возвращал бы кикнутого игрока сразу после кика
  if (!party.newPlayers.some((p) => p.id === localId)) {
    return <JoinNotice party={party} localId={localId} />;
  }

  const hostName =
    (party.host && currentPlayers[party.host]?.name) || party.host;
  const imHost = localId === party.host;

  // в одиночку игра выродится: рисовальщику некому отгадывать
  const alone = party.newPlayers.length < 2;

  const roomPath = getUrl("room/" + party.name);
  const roomLink = `${window.location.origin}${roomPath}`;

  function copyLink() {
    navigator.clipboard.writeText(roomLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <PageLayout background={<BackgroundDoodle />}>
      <div className={layout}>
        <section className={card}>
          <div className={cardHeader}>
            <div>
              <div className={roomLabel}>Комната</div>
              <div className={roomName}>{party.name}</div>
            </div>
            {imHost ? (
              <span className={hostBadge}>★ вы — хост</span>
            ) : (
              <span className={hostBadge}>хост: {hostName}</span>
            )}
          </div>

          <div className={linkRow}>
            <span className={linkText}>
              {roomLink.replace(/^https?:\/\//, "")}
            </span>
            <Button
              variant="secondary"
              size={1}
              className={copyButton}
              onClick={copyLink}
            >
              {copied ? "Скопировано ✓" : "Копировать"}
            </Button>
          </div>

          <div className={characterBlock}>
            <b className={characterTitle}>Ваш персонаж</b>
            <AvatarPicker
              value={myAvatar}
              onChange={(avatar) => editUserAvatar(localId, avatar)}
            />
          </div>

          <div className={paramRows}>
            <form
              className={paramRow}
              onSubmit={(ev) => {
                ev.preventDefault();

                // пустое имя не сохраняем: в списке игроков и в чате остался
                // бы безымянный игрок. Так же устроена форма в профиле
                const n = name.trim();
                if (n && n !== player?.name) {
                  editUserName(localId, n);
                } else {
                  setName(player?.name || "");
                }
              }}
            >
              <span>Ваше имя</span>
              <div className={nameField}>
                <TextField maxLen={30} onChange={setName} value={name} />
              </div>
              {name.trim() !== (player?.name || "") && (
                <Button type="submit" variant="secondary" size={1}>
                  ОК
                </Button>
              )}
            </form>
            <div className={paramRow}>
              <span>Раунды</span>
              <div className={paramSelect}>
                <Select
                  value={party.gameParams.rounds}
                  onChange={(value) => {
                    updateGameParams(party.id, {
                      ...party.gameParams,
                      rounds: value,
                    });
                  }}
                  options={[
                    { value: 3, label: "3 раунда" },
                    { value: 5, label: "5 раундов" },
                    { value: 7, label: "7 раундов" },
                    { value: 10, label: "10 раундов" },
                  ]}
                  disabled={!imHost}
                />
              </div>
            </div>
            <div className={paramRow}>
              <span>Слов на выбор</span>
              <div className={paramSelect}>
                <Select
                  value={party.gameParams.wordSuggestions}
                  onChange={(value) => {
                    updateGameParams(party.id, {
                      ...party.gameParams,
                      wordSuggestions: value,
                    });
                  }}
                  options={[
                    { value: 2, label: "2 слова" },
                    { value: 3, label: "3 слова" },
                    { value: 4, label: "4 слова" },
                    { value: 5, label: "5 слов" },
                  ]}
                  disabled={!imHost}
                />
              </div>
            </div>
            <div className={paramRow}>
              <span>Время, сек</span>
              <div className={paramSelect}>
                <Select
                  value={party.gameParams.drawTime || 60}
                  onChange={(value) => {
                    updateGameParams(party.id, {
                      ...party.gameParams,
                      drawTime: value,
                    });
                  }}
                  options={[
                    { value: 30, label: "30 секунд" },
                    { value: 60, label: "60 секунд" },
                    { value: 90, label: "90 секунд" },
                    { value: 120, label: "120 секунд" },
                  ]}
                  disabled={!imHost}
                />
              </div>
            </div>
          </div>

          {imHost && (
            <>
              <Button
                size={3}
                disabled={alone}
                onClick={() => {
                  // реальная причина отказа одна — игру уже начали (двойной
                  // клик, второй хост), и экран сам переключится на неё
                  startParty(party).catch((err) =>
                    console.error("startParty:", err),
                  );
                }}
              >
                Начать игру
              </Button>
              {alone && (
                <p className={startHint}>
                  Играть одному не с кем — позовите друзей по ссылке выше.
                </p>
              )}
              <div className={closeRow}>
                <Button
                  variant="text"
                  size={1}
                  onClick={() => {
                    closeParty(party.id);
                  }}
                >
                  закрыть игру
                </Button>
              </div>
            </>
          )}
        </section>

        <aside className={players}>
          <div className={playersHeader}>
            <span>Игроки · {party.newPlayers.length}</span>
            <span>ждём ещё…</span>
          </div>
          {party.newPlayers.map((p) => (
            <div key={p.id} className={playerRow}>
              <div className={figureSlot}>
                <PlayerFigure
                  color={avatars[p.id]?.color}
                  shape={avatars[p.id]?.shape}
                />
              </div>
              <b>{p.name}</b>
              {p.id === party.host && (
                <span className={playerHostBadge}>хост</span>
              )}
              {p.id === localId && (
                <button
                  className={`${rowAction} ${leaveAction}`}
                  onClick={() => {
                    leaveParty(localId, party).then(() => {
                      navigate(getUrl(""));
                    });
                  }}
                >
                  выйти
                </button>
              )}
              {p.id !== localId && imHost && (
                <button
                  className={`${rowAction} ${kickAction}`}
                  onClick={() => {
                    kickPlayer(party.id, p.id);
                  }}
                >
                  Кикнуть
                </button>
              )}
            </div>
          ))}
        </aside>
      </div>
    </PageLayout>
  );
}

type NoticeProps = {
  title: string;
  text: string;
};

function RoomNotice({ title, text }: NoticeProps) {
  return (
    <PageLayout>
      <div className={notice}>
        <span className={noticeTitle}>{title}</span>
        <p className={noticeText}>{text}</p>
        <Link href={getUrl("")} className={noticeAction}>
          <Button variant="primary">На главную</Button>
        </Link>
      </div>
    </PageLayout>
  );
}

type JoinProps = {
  party: NewParty;
  localId: string;
};

function JoinNotice({ party, localId }: JoinProps) {
  const [busy, setBusy] = useState(false);

  return (
    <PageLayout>
      <div className={notice}>
        <span className={noticeTitle}>Комната {party.name}</span>
        <p className={noticeText}>
          Вас пригласили в игру. Внутри игроков: {party.newPlayers.length}.
        </p>
        <Button
          className={noticeAction}
          disabled={busy}
          onClick={() => {
            setBusy(true);
            joinToParty(localId, party.id).catch(() => setBusy(false));
          }}
        >
          Войти в комнату
        </Button>
      </div>
    </PageLayout>
  );
}
