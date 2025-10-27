import React from "react";
import { Link } from "wouter";
import { css } from "@linaria/core";
import { getUrl } from "../utils.ts";
import { BUILD_INFO } from "../config.ts";

type Props = {
  children: React.ReactNode;
};

const container = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 12px;
  line-height: 1;
`;

const header = css`
  margin-bottom: 24px;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const title = css`
  font-size: 30px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  text-align: center;
`;

const content = css`
  width: 100%;
  max-width: 820px;
`;

const footer = css`
  margin-top: auto;
  display: flex;
  gap: 8px 32px;
  font-size: 14px;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }
`;

export function PageLayout({ children }: Props) {
  const buildDate = new Date(BUILD_INFO.buildTimestamp);
  const timeAgo = Date.now() - BUILD_INFO.buildTimestamp;

  return (
    <div className={container}>
      <header className={header}>
        <Link href={getUrl("")}>
          <h1 className={title}>Drawinchi</h1>
        </Link>
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
