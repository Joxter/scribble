import React from "react";
import { Link, Route, Switch } from "wouter";
import { DrawingPage } from "./drawing/Page";
import { resetDEMO } from "./game.model";

export function Router() {
  return (
    <div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link href="/scribble/">главная</Link>
        <a href="https://joxter.github.io/scribble/" target="_blank">
          https://joxter.github.io/scribble/
        </a>
        <div>
          <button onClick={resetDEMO}>reset</button>
        </div>
      </div>
      <Switch>
        <Route path="/scribble/" component={DrawingPage} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  );
}
