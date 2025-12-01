import React, { useEffect } from "react";
import { Route, Switch, useLocation, useRoute } from "wouter";
import { HomePage } from "./Home.page.tsx";
import { DrawingPage } from "./Drawing.page.tsx";
import { WordsPage } from "./Words.page.tsx";
import { PaintingsPage } from "./Paintings.page.tsx";
import { PartyPrepare } from "./PartyPrepare.page.tsx";
import { AllPartiesPage } from "./AllParties.page.tsx";
import { useUnit } from "effector-react";
import { $newParty, $player } from "./model/game-new.model.ts";
import { GAME_STATUS } from "./types.ts";
import { getUrl } from "./utils.ts";
import { PageLayout } from "./components/PageLayout.tsx";

export function Router() {
  const party = useUnit($newParty);
  const [location, navigate] = useLocation();
  const player = useUnit($player);

  useEffect(() => {
    if (!player) return;
    console.log("-------");
    console.log(party);

    if (!party) {
      console.log("1111");
      navigate(getUrl(""));
      // } else if (
      //   party.status === GAME_STATUS.prepare ||
      //   party.status === GAME_STATUS.finished ||
      //   party.status === GAME_STATUS.inProgress
      // ) {
      //   navigate(getUrl("current-party"));
    } else {
      navigate(getUrl(""));
    }
  }, [party, player]);

  if (!player) return null;

  return (
    <div style={{ height: "100%" }}>
      <Switch>
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

  return (
    <PageLayout>
      <h3>RoomPage</h3>
      <p>name: {params?.roomName || "not found"}</p>
    </PageLayout>
  );
}
