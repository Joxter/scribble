import React, { useState } from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { useLocation } from "wouter";
import { getUrl, newRandomWords } from "../utils.ts";
import { PageLayout } from "../components/PageLayout.tsx";
import { Button } from "../components/Button.tsx";
import {
  createNewParty,
  getPreparePartyByName,
  joinToParty,
} from "../db-things.ts";
import { $player } from "../model/game-new.model.ts";

const layout = css`
  display: flex;
  gap: 16px;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 815px) {
    flex-direction: column;
    align-items: center;
  }
`;

const card = css`
  width: 500px;
  flex: none;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 20px 40px -28px rgba(30, 40, 50, 0.5);
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 815px) {
    width: 100%;
    max-width: 500px;
  }
`;

const cardTitle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > b {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.3px;
  }

  & > span {
    font-size: 14px;
    color: var(--muted);
  }
`;

const joinForm = css`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const codeRow = css`
  display: flex;
  align-items: center;
  gap: 14px;

  & > span {
    width: 130px;
    flex: none;
    font-size: 14px;
    font-weight: 700;
    color: var(--slate);
  }
`;

const codeInput = css`
  flex: 1;
  min-width: 0;
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  background-color: var(--sunken);
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    background-color: #fff;
    border-color: var(--brand);
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.18);
  }
`;

const divider = css`
  display: flex;
  align-items: center;
  gap: 12px;

  & > i {
    flex: 1;
    height: 1px;
    background-color: var(--sunken);
  }

  & > span {
    font-size: 12px;
    color: #a3aab3;
    font-weight: 700;
  }
`;

const error = css`
  font-size: 13px;
  font-weight: 700;
  color: var(--danger-text);
`;

const rules = css`
  width: 300px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 4px;

  @media (max-width: 815px) {
    width: 100%;
    max-width: 500px;
  }
`;

const rulesTitle = css`
  font-size: 15px;
  font-weight: 800;
  color: var(--ink);
`;

const rule = css`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 14px;
  color: var(--slate);
`;

const ruleNumber = css`
  flex: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--sunken);
  color: var(--slate);
  font-size: 12px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rulesFooter = css`
  border-top: 1px solid #e8e2d4;
  margin-top: 4px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > b {
    font-size: 13px;
    font-weight: 800;
    color: var(--slate);
  }

  & > span {
    font-size: 12px;
    color: var(--muted);
  }
`;

const RULES = [
  "Каждый раунд один игрок получает слово и рисует его на холсте.",
  "Остальные пишут догадки в чат — чем раньше угадали, тем больше очков.",
  "Художник получает очки за каждого, кто угадал.",
  "После всех раундов побеждает игрок с наибольшей суммой.",
];

export function HomePage() {
  return (
    <PageLayout>
      <div className={layout}>
        <JoinOrCreate />
        <Rules />
      </div>
    </PageLayout>
  );
}

function JoinOrCreate() {
  const player = useUnit($player);
  const [roomCode, setRoomCode] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [busy, setBusy] = useState(false);
  const [, navigate] = useLocation();

  async function handleJoin(ev: React.FormEvent) {
    ev.preventDefault();

    const code = roomCode.trim();
    if (!code || !player) return;

    setBusy(true);
    setNotFound(false);

    try {
      const found = await getPreparePartyByName(code);
      if (!found) {
        setNotFound(true);
        return;
      }

      await joinToParty(player.id, found.id);
      navigate(getUrl("room/" + found.name));
    } finally {
      setBusy(false);
    }
  }

  async function handleCreate() {
    if (!player) return;

    setBusy(true);
    try {
      const created = await createNewParty(
        player.id,
        newRandomWords(3).join("-"),
      );
      navigate(getUrl("room/" + created.name));
    } catch (err) {
      console.error("Failed to create party:", err);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className={card}>
      <div className={cardTitle}>
        <b>Играть с друзьями</b>
        <span>Введите код комнаты или создайте свою</span>
      </div>

      <form className={joinForm} onSubmit={handleJoin}>
        <label className={codeRow}>
          <span>Код комнаты</span>
          <input
            className={codeInput}
            value={roomCode}
            placeholder="кот лиса ракета"
            onChange={(e) => {
              setRoomCode(e.target.value);
              setNotFound(false);
            }}
          />
        </label>

        {notFound && <p className={error}>Комната не найдена</p>}

        <Button type="submit" size={3} disabled={busy || !roomCode.trim()}>
          Войти в комнату
        </Button>
      </form>

      <div className={divider}>
        <i />
        <span>или</span>
        <i />
      </div>

      <Button variant="secondary" disabled={busy} onClick={handleCreate}>
        Создать новую игру
      </Button>
    </section>
  );
}

function Rules() {
  return (
    <aside className={rules}>
      <span className={rulesTitle}>Как играть</span>
      {RULES.map((text, i) => (
        <div key={text} className={rule}>
          <span className={ruleNumber}>{i + 1}</span>
          <span>{text}</span>
        </div>
      ))}
      <div className={rulesFooter}>
        <b>3–8 игроков · 10–90 секунд на раунд</b>
        <span>Подсказки открываются по буквам ближе к концу времени.</span>
      </div>
    </aside>
  );
}
