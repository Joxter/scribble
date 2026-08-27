import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { ChatMessages } from "../drawing/ChatMessages.tsx";
import { RoomHeader } from "../drawing/RoomHeader.tsx";
import { PlayerFigures } from "../drawing/PlayerFigures.tsx";
import { GameInputField } from "../drawing/GameInputField.tsx";
import { Fps } from "../components/Fps.tsx";
import { PageLayout } from "../components/PageLayout.tsx";
import { Podium } from "../components/Podium.tsx";
import { FinalStandings } from "../components/FinalStandings.tsx";
import { PaintingsGallery } from "../components/PaintingsGallery.tsx";
import { Button } from "../components/Button.tsx";
import { $localId, $newParty } from "../model/game-new.model.ts";
import { restartParty } from "../db-things.ts";
import { calculateTotalScores } from "../utils.ts";

const page = css`
  display: flex;
  gap: 16px;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 815px) {
    flex-direction: column;
    align-items: center;
  }
`;

const leftColumn = css`
  width: var(--col-main);
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 815px) {
    width: 100%;
    max-width: var(--col-main);
  }
`;

const rightColumn = css`
  width: var(--col-side);
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 815px) {
    width: 100%;
    max-width: var(--col-main);
  }
`;

const header = css`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 0 4px;
  height: var(--row-head);
  flex: none;
  overflow: hidden;
`;

const title = css`
  font-size: 20px;
  font-weight: 900;
  color: var(--ink);
  flex: none;
`;

const subtitle = css`
  font-size: 15px;
  color: var(--slate);
  font-weight: 700;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & b {
    color: var(--ink);
    font-weight: 900;
  }
`;

/* тот же квадрат, что холст и окно выбора слова, см. --col-main */
const panel = css`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 14px 26px -18px rgba(30, 40, 50, 0.4);
  display: flex;
  overflow: hidden;

  /* в одну колонку квадрат не нужен: тянемся по содержимому */
  @media (max-width: 815px) {
    aspect-ratio: auto;
  }

  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

const standingsPane = css`
  width: 196px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  border-right: 1px solid var(--sunken);
  overflow: hidden;

  @media (max-width: 479px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--sunken);
  }
`;

const resultsPane = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  overflow: hidden;
  min-width: 0;
`;

const lobbyButton = css`
  margin-top: auto;
  flex: none;
  padding: 11px;
  border-radius: 14px;
`;

const againNote = css`
  margin-top: auto;
  font-size: 11px;
  color: var(--muted);
  text-align: center;
`;

const chatWindow = css`
  flex: 1;
  min-height: 240px;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 815px) {
    flex: none;
    height: var(--chat-mobile);
  }
`;

export function FinishedGamePage() {
  const party = useUnit($newParty);
  const localId = useUnit($localId);

  if (!party) return null;

  const totals = calculateTotalScores(party.gameProgress);
  const winner = party.newPlayers
    .map((p) => ({ ...p, score: totals[p.id] || 0 }))
    .sort((a, b) => b.score - a.score)[0];

  const imHost = localId === party.host;

  return (
    <PageLayout>
      <Fps />
      <div className={page}>
        <div className={leftColumn}>
          <div className={header}>
            <span className={title}>Игра окончена!</span>
            {winner && (
              <span className={subtitle}>
                победил(а) <b>{winner.name}</b>
              </span>
            )}
          </div>

          <div className={panel}>
            <div className={standingsPane}>
              <FinalStandings />
              {imHost ? (
                <Button
                  className={lobbyButton}
                  onClick={() => restartParty(party)}
                >
                  В лобби
                </Button>
              ) : (
                <span className={againNote}>
                  Хост может вернуть всех в лобби
                </span>
              )}
            </div>

            <div className={resultsPane}>
              <Podium />
              <PaintingsGallery />
            </div>
          </div>

          <GameInputField />
        </div>

        <div className={rightColumn}>
          <RoomHeader />
          <div className={chatWindow}>
            <ChatMessages />
            <PlayerFigures />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
