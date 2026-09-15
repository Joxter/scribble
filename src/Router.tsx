import React, { useEffect } from "react";
import { Route, Switch, useLocation, useRoute } from "wouter";
import { HomePage } from "./pages/Home.page.tsx";
import { WordsPage } from "./pages/Words.page.tsx";
import { PaintingsPage } from "./pages/Paintings.page.tsx";
import { PartyPrepare } from "./pages/PartyPrepare.page.tsx";
import { AllPartiesPage } from "./pages/AllParties.page.tsx";
import { ProfilePage } from "./pages/Profile.page.tsx";
import { DevPage } from "./pages/Dev.page.tsx";
import { useUnit } from "effector-react";
import { $localId, $newParty, $player, party } from "./model/game-new.model.ts";
import { getUrl } from "./utils.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import { GAME_STATUS } from "./types.ts";

export function Router() {
  const [partyStatus, openedParty, localId] = useUnit([
    party.$partyStatus,
    $newParty,
    $localId,
  ]);
  const imInOpenedParty = Boolean(
    openedParty?.newPlayers.some((p) => p.id === localId),
  );

  const [location, navigate] = useLocation();
  const [inRoom, roomParams] = useRoute("/scribble/room/:roomName");
  const player = useUnit($player);

  // Подписку на комнату переключает эффект страницы, поэтому первый кадр
  // новой комнаты рисуется ещё с данными прошлой. Решать по ним нельзя:
  // так только что созданная комната выкидывала обратно на главную
  const partyIsThisRoom = openedParty?.name === roomParams?.roomName;

  // Комнату закрыли, не начав игру (брошенное лобби: закрыл сервер или
  // последний вышедший) — подиум с нулями показывать не за что
  const emptyFinish =
    openedParty?.status === GAME_STATUS.finished &&
    openedParty.gameProgress.flat().length === 0;

  // Единственное место с автоматическими переходами: уводим из чужой и из
  // закрытой комнаты. Обратно в свою игру зовёт кнопка в шапке (PageLayout):
  // раньше сюда же затаскивало роутером по $pagePartyName, а он не
  // сбрасывается при уходе со страницы комнаты — и профиль с остальными
  // страницами открыть было нельзя.
  useEffect(() => {
    if (!player || !inRoom) return;
    // пока комната грузится или не нашлась, решает страница комнаты
    if (partyStatus !== "found" || !partyIsThisRoom) return;

    // Лобби — не чужое: по ссылке приглашения сюда приходит как раз тот,
    // кого в комнате ещё нет, и страница предложит ему войти
    const foreign =
      !imInOpenedParty && openedParty?.status !== GAME_STATUS.prepare;

    if (foreign || emptyFinish) {
      navigate(getUrl(""));
    }
    // openedParty?.status в зависимостях не для красоты: без него зритель,
    // открывший ссылку-приглашение и не нажавший «Войти», оставался на
    // странице, когда в комнате начиналась игра
  }, [
    player,
    location,
    partyStatus,
    imInOpenedParty,
    partyIsThisRoom,
    emptyFinish,
    openedParty?.status,
  ]);

  if (!player) return null;

  return (
    <div style={{ height: "100%" }}>
      <Switch>
        <Route path="/scribble/dev" component={DevPage} />
        <Route path="/scribble/profile" component={ProfilePage} />
        <Route path="/scribble/words" component={WordsPage} />
        <Route path="/scribble/paintings" component={PaintingsPage} />
        <Route path="/scribble/all-rooms" component={AllPartiesPage} />
        <Route path="/scribble/room/:roomName" component={RoomPage} />
        {/*<Route path="/scribble/current-party" component={PartyPrepare} />*/}
        <Route path="/scribble" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

function RoomPage() {
  const [match, params] = useRoute("/scribble/room/:roomName");

  useEffect(() => {
    if (params?.roomName) {
      party.pageOpened(params.roomName);
    }
  }, [params?.roomName]);

  if (params?.roomName) {
    return <PartyPrepare />;
  }

  return (
    <PageLayout>
      <h3>not found</h3>
    </PageLayout>
  );
}
