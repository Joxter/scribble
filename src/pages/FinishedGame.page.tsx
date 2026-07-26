import React from "react";
import { DeveloperTools } from "../components/DeveloperTools.tsx";
import { ListOfPlayers } from "../drawing/ListOfPlayers.tsx";
import { css } from "@linaria/core";
import { ChatMessages } from "../drawing/ChatMessages.tsx";
import { Fps } from "../components/Fps.tsx";
import { PageLayout } from "../components/PageLayout.tsx";
import { useUnit } from "effector-react";
import {
  $currentPlayers,
  $newParty,
  $partyPaintingIds,
} from "../model/game-new.model.ts";
import { calculateTotalScores } from "../utils.ts";

const page = css`
  display: grid;
  gap: 8px;
  width: 100%;
  max-width: 500px;
  grid-template-areas:
    "header"
    "canvas"
    "footer"
    "players";
  grid-template-rows: min-content 1fr min-content min-content;
  margin: 0 auto;

  @media (width > 808px) {
    grid-template-areas:
      "header ."
      "canvas players"
      "footer .";
    grid-template-columns: 500px 300px;
    grid-template-rows: auto 500px auto;
    max-width: none;
  }
`;

const header = css`
  grid-area: header;
`;

const canvasSection = css`
  grid-area: canvas;
  width: 100%;
  padding: 8px;
`;

const footer = css`
  grid-area: footer;
`;

const playersSection = css`
  grid-area: players;
  display: grid;
  gap: 8px;
  overflow: hidden;
`;

export function FinishedGamePage() {
  const [party, players] = useUnit([
    $newParty,
    $currentPlayers,
    $partyPaintingIds,
  ]);

  if (!party) return null;

  const playerScores = calculateTotalScores(party.gameProgress);

  // Sort players by score
  const topPlayers = Object.keys(players)
    .map((playerId) => ({
      player: players[playerId],
      score: playerScores[playerId] || 0,
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <PageLayout>
      <Fps />
      <div className={page}>
        <div className={header}></div>

        <div className={canvasSection}>
          <p>Игра закончена!</p>
          <div>
            <h2>Топ игроков:</h2>
            <ol>
              {topPlayers.map(({ player, score }) => (
                <li key={player.id}>
                  {player.name} - {score} очков
                </li>
              ))}
            </ol>
          </div>
          <p>todo: рисунки</p>
          <p>todo: ещё раз</p>
        </div>
        <div className={footer}>
          <DeveloperTools />
        </div>
        <div className={playersSection}>
          <ListOfPlayers />
          <ChatMessages />
        </div>
      </div>
    </PageLayout>
  );
}
