import React from "react";
import { Link } from "wouter";
import { getUrl } from "../utils.ts";
import css from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Link href={getUrl("")}>
          <h1 className={css.title}>Drawinchi</h1>
        </Link>
      </header>

      <main className={css.content}>{children}</main>

      <footer className={css.footer}>
        <Link href={getUrl("all-rooms")}>Все комнаты</Link>
        <Link href={getUrl("words")}>Слова</Link>
        <Link href={getUrl("paintings")}>Картины</Link>
      </footer>
    </div>
  );
}
