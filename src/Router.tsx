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

export function Router() {
  const [party222, partyName, partyStatus, openedParty, localId] = useUnit([
    party.$allMyParties,
    party.$pagePartyName,
    party.$partyStatus,
    $newParty,
    $localId,
  ]);
  const partyy = party222.find((p) => p.name === partyName);
  const imInOpenedParty = Boolean(
    openedParty?.newPlayers.some((p) => p.id === localId),
  );

  const [location, navigate] = useLocation();
  const player = useUnit($player);

  useEffect(() => {
    if (!player) return;
    if (location.startsWith(getUrl("dev"))) return;

    if (location.startsWith(getUrl("room/"))) {
      // пока комната грузится или не нашлась, решает страница комнаты:
      // домой отправляем только из чужой комнаты
      if (partyStatus === "found" && !imInOpenedParty) {
        navigate(getUrl(""));
      }
      return;
    }

    if (partyy) {
      navigate(getUrl("room/" + partyy.name));
    }
  }, [partyy, player, partyStatus, imInOpenedParty]);

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
