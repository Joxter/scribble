import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { HomePage } from "./Home.page.tsx";
import { DrawingPage } from "./Drawing.page.tsx";
import { WordsPage } from "./Words.page.tsx";
import { PaintingsPage } from "./Paintings.page.tsx";
import { PartyPrepare } from "./PartyPrepare.page.tsx";
import { AllPartiesPage } from "./AllParties.page.tsx";
import { useUnit } from "effector-react";
import { $newParty } from "./model/game-new.model.ts";
import { GAME_STATUS } from "./types.ts";
import { getUrl } from "./utils.ts";

export function Router() {
  const party = useUnit($newParty);
  const [location, navigate] = useLocation();

  useEffect(() => {
    console.log("party.status", party.status);
    if (!party) {
      navigate(getUrl(""));
    } else if (
      party.status === GAME_STATUS.prepare ||
      party.status === GAME_STATUS.inProgress
    ) {
      navigate(getUrl("current-party"));
    } else if (party.status === GAME_STATUS.finished) {
      navigate(getUrl(""));
    } else {
      navigate(getUrl(""));
    }
  }, [party]);

  return (
    <div style={{ height: "100%" }}>
      <Switch>
        <Route path="/scribble/words" component={WordsPage} />
        <Route path="/scribble/paintings" component={PaintingsPage} />
        <Route path="/scribble/all-rooms" component={AllPartiesPage} />
        {/*<Route path="/scribble/room/:roomId" component={DrawingPage} />*/}
        <Route path="/scribble/current-party" component={PartyPrepare} />
        <Route path="/scribble" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
