import React, { useEffect } from "react";
import { Route, Switch, useLocation, useRoute } from "wouter";
import { HomePage } from "./Home.page.tsx";
import { WordsPage } from "./Words.page.tsx";
import { PaintingsPage } from "./Paintings.page.tsx";
import { PartyPrepare } from "./PartyPrepare.page.tsx";
import { AllPartiesPage } from "./AllParties.page.tsx";
import { useUnit } from "effector-react";
import { $player, party } from "./model/game-new.model.ts";
import { getUrl } from "./utils.ts";
import { PageLayout } from "./components/PageLayout.tsx";

export function Router() {
  const [party222, partyName] = useUnit([
    party.$allMyParties,
    party.$pagePartyName,
  ]);
  const partyy = party222.find((p) => p.name === partyName);

  const [location, navigate] = useLocation();
  const player = useUnit($player);

  useEffect(() => {
    if (!player) return;

    if (partyy) {
      navigate(getUrl("room/" + partyy.name));
    } else {
      navigate(getUrl(""));
    }
  }, [partyy, player]);

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
