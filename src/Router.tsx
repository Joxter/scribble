import React from "react";
import { Link, Route, Switch } from "wouter";
import { DrawingPage } from "./drawing/Page";
import { resetDEMO, undoClicked } from "./game.model";
import arrowArcLeftSrc from "./drawing/ArrowArcLeft.svg";

export function Router() {
  return (
    <div>
      <div style={{ display: "flex", gap: "32px", marginBottom: "20px" }}>
        <Link href="/scribble/">главная</Link>
        <div>
          <button onClick={resetDEMO}>reset</button>
        </div>
        <a href="https://joxter.github.io/scribble/" target="_blank">
          https://joxter.github.io/scribble/
        </a>
        <button onClick={undoClicked}>
          <img style={{ width: "20px" }} src={arrowArcLeftSrc} />
        </button>
      </div>
      <Switch>
        <Route path="/scribble/" component={DrawingPage} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  );
}
