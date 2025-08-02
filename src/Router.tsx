import React from "react";
import { Route, Switch } from "wouter";
import { DrawingPage } from "./drawing/Page";

export function Router() {
  return (
    <div style={{ height: "100%" }}>
      <Switch>
        <Route path="/scribble/" component={DrawingPage} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  );
}
