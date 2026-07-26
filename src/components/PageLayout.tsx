import React from "react";
import { Link } from "wouter";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { getUrl } from "../utils.ts";
import { BUILD_INFO } from "../config.ts";
import { $player } from "../model/game-new.model.ts";

type Props = {
  children: React.ReactNode;
};

const container = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--desk);
  padding: 12px;
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

const profileLink = css`
  text-decoration: none;
  color: var(--slate);
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: var(--ink);
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

  & a {
    text-decoration: none;
    color: var(--slate);
    font-weight: 700;
  }

  & a:hover {
    color: var(--ink);
  }
`;

export function PageLayout({ children }: Props) {
  const player = useUnit($player);
  const timeAgo = Date.now() - BUILD_INFO.buildTimestamp;

  return (
    <div className={container}>
      <header className={headerBar}>
        <Link href={getUrl("")} className={logoLink}>
          <h1 className={title}>Scribble</h1>
        </Link>
        {player && (
          <Link href={getUrl("profile")} className={profileLink}>
            {player.name}
          </Link>
        )}
      </header>

      <main className={content}>{children}</main>

      <footer className={footer}>
        <Link href={getUrl("")}>Главная</Link>
        <Link href={getUrl("all-rooms")}>Все комнаты</Link>
        <Link href={getUrl("words")}>Слова</Link>
        <Link href={getUrl("paintings")}>Картины</Link>
        <p>build {(timeAgo / (1000 * 60)).toFixed(1)} min ago</p>
      </footer>
    </div>
  );
}
