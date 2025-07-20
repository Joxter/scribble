import React from "react";
import { Link, Route, Switch } from "wouter";
import { DrawingPage } from "./drawing/Page";

export function Router() {
  return (
    <div>
      <Link href="/scribble/">рисовать</Link>
      <Switch>
        <Route path="/scribble/" component={DrawingPage} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  );
}
