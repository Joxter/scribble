import React from "react";
import { DeveloperTools } from "./components/DeveloperTools.tsx";
import { ListOfPlayers } from "./drawing/ListOfPlayers.tsx";
import css from "./drawing/Page.module.css";
import { ChatMessages } from "./drawing/ChatMessages.tsx";
import { Fps } from "./components/Fps.tsx";
import { PageLayout } from "./components/PageLayout.tsx";

export function FinishedGamePage() {
  return (
    <PageLayout>
      <Fps />
      <div className={css.page}>
        <div className={css.header}></div>

        <div className={css.canvasSection}>
          <p>Игра закончена!</p>
          <p>todo: топ игроков</p>
          <p>todo: рисунки</p>
          <p>todo: ещё раз</p>
        </div>
        <div className={css.footer}>
          <DeveloperTools />
        </div>
        <div className={css.players}>
          <ListOfPlayers />
          <ChatMessages />
        </div>
      </div>
    </PageLayout>
  );
}
