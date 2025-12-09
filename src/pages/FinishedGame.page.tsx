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

function calculatePlayerScores(
  gameProgress: any[],
  players: Record<string, any>,
) {
  const playerScores: Record<string, number> = {};

  // Initialize scores for all players
  Object.keys(players).forEach((playerId) => {
    playerScores[playerId] = 0;
  });

  // Calculate scores from game progress
  gameProgress.forEach((round) => {
    round.forEach((session: any) => {
      const { scores, whoDrawId } = session;

      // Sort guessers by timestamp (earlier = better)
      const sortedGuessers = Object.entries(scores).sort(
        ([, timeA], [, timeB]) => (timeA as number) - (timeB as number),
      );

      // Award points based on guess order
      sortedGuessers.forEach(([playerId], index) => {
        const points = Math.max(100 - index * 10, 10);
        playerScores[playerId] = (playerScores[playerId] || 0) + points;
      });

      // Award points to the artist
      if (sortedGuessers.length > 0) {
        playerScores[whoDrawId] = (playerScores[whoDrawId] || 0) + 50;
      }
    });
  });

  return playerScores;
}

export function FinishedGamePage() {
  const [{ gameProgress }, players] = useUnit([
    $newParty,
    $currentPlayers,
    $partyPaintingIds,
  ]);

  const playerScores = calculatePlayerScores(gameProgress, players);

  // Sort players by score
  const topPlayers = Object.entries(playerScores)
    .map(([playerId, score]) => ({
      player: players[playerId],
      score,
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
