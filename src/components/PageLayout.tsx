import React from "react";
import { Link, useLocation } from "wouter";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { getUrl } from "../utils.ts";
import { BUILD_INFO } from "../config.ts";
import { $player, party } from "../model/game-new.model.ts";
import { GAME_STATUS } from "../types.ts";
import { DeveloperTools } from "./DeveloperTools.tsx";
import { PlayerFigure } from "./PlayerFigure.tsx";
import { Button } from "./Button.tsx";
import { $doodleEnabled, doodleToggled } from "../model/doodle.model.ts";

type Props = {
  children: React.ReactNode;
  background?: React.ReactNode;
};

const container = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

/* снизу оставляем место под плавающую панель инструментов */
const withBackground = css`
  padding-bottom: 150px;
`;

const headerBar = css`
  width: 100%;
  max-width: 820px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 12px 0;
`;

const logoLink = css`
  text-decoration: none;
  color: inherit;
`;

const title = css`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: var(--ink);
  margin: 0;
`;

const playerBadge = css`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const playerName = css`
  font-size: 15px;
  font-weight: 800;
  color: var(--ink);
`;

const profileLink = css`
  text-decoration: none;
  color: var(--brand-dark);
  font-size: 13px;
  font-weight: 800;

  &:hover {
    text-decoration: underline;
  }
`;

/* бейдж игрока забирает свободное место своим margin-left: auto,
   поэтому кнопка встаёт вплотную к имени */
const doodleToggle = css`
  margin-left: 8px;
  white-space: nowrap;
`;

/* Большая красная: игра идёт, а игрок ушёл на другую страницу. На самой
   странице комнаты не показывается — он уже там */
const backToGame = css`
  width: 100%;
  max-width: 820px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--danger);
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  border-radius: 16px;
  border-bottom: 4px solid var(--danger-text);
  padding: 16px 26px;

  &:active {
    border-bottom-width: 2px;
    transform: translateY(2px);
  }
`;

const content = css`
  width: 100%;
  max-width: 820px;
  flex: 1;
`;

const footer = css`
  margin-top: auto;
  padding-top: 24px;
  display: flex;
  gap: 8px 32px;
  font-size: 14px;
  flex-wrap: wrap;
  color: var(--muted);
`;

export function PageLayout({ children, background }: Props) {
  const player = useUnit($player);
  const myParties = useUnit(party.$allMyParties);
  const [location] = useLocation();
  const [doodleEnabled, toggleDoodle] = useUnit([
    $doodleEnabled,
    doodleToggled,
  ]);
  const timeAgo = Date.now() - BUILD_INFO.buildTimestamp;

  const unfinished = myParties.find((p) => p.status !== GAME_STATUS.finished);
  // на любой странице комнаты кнопки нет: игрок и так в комнате, а если
  // незаконченных партий у него две, звать из одной в другую — только путать
  const inRoom = location.startsWith(getUrl("room/"));

  return (
    <div
      className={`${container} ${background && doodleEnabled ? withBackground : ""}`}
    >
      {background}
      <header className={headerBar}>
        <Link href={getUrl("")} className={logoLink}>
          <h1 className={title}>Scribble</h1>
        </Link>
        {player && (
          <div className={playerBadge}>
            <PlayerFigure
              color={player.avatar.color}
              shape={player.avatar.shape}
              height={26}
            />
            <span className={playerName}>{player.name}</span>
            <Link href={getUrl("profile")} className={profileLink}>
              изменить
            </Link>
          </div>
        )}
        {background && (
          <Button
            variant="text"
            size={1}
            className={doodleToggle}
            onClick={() => toggleDoodle()}
          >
            {doodleEnabled ? "✏️ Готово" : "✏️ Порисовать"}
          </Button>
        )}
      </header>

      {unfinished && !inRoom && (
        <Link href={getUrl("room/" + unfinished.name)} className={backToGame}>
          ↩ Вернуться в игру · {unfinished.name}
        </Link>
      )}

      <main className={content}>{children}</main>

      {import.meta.env.DEV && <DeveloperTools />}

      <footer className={footer}>
        <p>build {(timeAgo / (1000 * 60)).toFixed(1)} min ago</p>
      </footer>
    </div>
  );
}
