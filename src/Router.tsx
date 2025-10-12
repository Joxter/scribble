import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "./Home.page.tsx";
import { DrawingPage } from "./drawing/Drawing.page.tsx";
import { WordsPage } from "./Words.page.tsx";
import { PaintingsPage } from "./Paintings.page.tsx";
import { PartyPrepare } from "./PartyPrepare.page.tsx";

export function Router() {
  return (
    <div style={{ height: "100%" }}>
      <Switch>
        <Route path="/scribble/words" component={WordsPage} />
        <Route path="/scribble/paintings" component={PaintingsPage} />
        <Route path="/scribble/room/:roomId" component={DrawingPage} />
        <Route path="/scribble/current-party" component={PartyPrepare} />
        <Route path="/scribble" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
