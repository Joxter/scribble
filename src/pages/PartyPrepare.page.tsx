import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/PageLayout.tsx";
import { useUnit } from "effector-react";
import {
  $currentPlayers,
  $localId,
  $newParty,
  $player,
} from "../model/game-new.model.ts";
import { css } from "@linaria/core";
import { TextField } from "../components/TextField.tsx";
import { Button } from "../components/Button.tsx";
import { Select } from "../components/Select.tsx";
import {
  FIGURE_COLORS,
  PlayerFigure,
  figureColor,
} from "../components/PlayerFigure.tsx";
import { Placeholder } from "../components/Placeholder.tsx";
import {
  closeParty,
  editUserName,
  kickPlayer,
  leaveParty,
  startParty,
  updateGameParams,
} from "../db-things.ts";
import { useLocation } from "wouter";
import { getUrl } from "../utils.ts";
import { GAME_STATUS } from "../types.ts";
import { DrawingPage } from "./Drawing.page.tsx";
import { FinishedGamePage } from "./FinishedGame.page.tsx";

const layout = css`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 807px) {
    flex-direction: column;
    align-items: stretch;
    max-width: 500px;
    margin: 0 auto;
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

  @media (max-width: 807px) {
    width: 100%;
  }
`;

const cardHeader = css`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const roomLabel = css`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const roomName = css`
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.3px;
  line-height: 1.15;
`;

const hostBadge = css`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: var(--warn-bg);
  color: var(--warn-text);
  border: 1px solid var(--warn-border);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
`;

const linkRow = css`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: var(--sunken);
  border: 1px dashed var(--keycap-edge);
  border-radius: 12px;
  padding: 8px 8px 8px 14px;
`;

const linkText = css`
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--slate);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const copyButton = css`
  margin-left: auto;
  white-space: nowrap;
`;

const characterRow = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const characterAvatar = css`
  width: 72px;
  height: 82px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--brand-bg);
  border-radius: 12px;
`;

const characterInfo = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > b {
    font-size: 15px;
    font-weight: 800;
    color: var(--ink);
  }
`;

const characterColors = css`
  display: flex;
  gap: 6px;

  & > span {
    width: 22px;
    height: 22px;
    border-radius: 50%;
  }
`;

const paramRow = css`
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

const paramRows = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const nameField = css`
  flex: 1;
`;

const paramSelect = css`
  width: 150px;
`;

const closeRow = css`
  display: flex;
  justify-content: center;
`;

const players = css`
  width: 300px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 6px;

  @media (max-width: 807px) {
    width: 100%;
  }
`;

const playersHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 6px 6px;

  & > span:first-child {
    font-size: 14px;
    font-weight: 800;
    color: var(--slate);
  }

  & > span:last-child {
    font-size: 12px;
    color: var(--muted);
  }
`;

const playerRow = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 6px;

  & > b {
    font-weight: 800;
    font-size: 15px;
  }
`;

const figureSlot = css`
  width: 22px;
  display: flex;
  justify-content: center;
`;

const playerHostBadge = css`
  font-size: 11px;
  color: var(--warn-text);
  font-weight: 800;
  background-color: var(--warn-bg);
  border-radius: 999px;
  padding: 2px 8px;
`;

const rowAction = css`
  margin-left: auto;
  font-family: inherit;
  font-size: 13px;
  font-weight: 800;
  background: transparent;
  border: none;
  border-radius: 9px;
  padding: 6px 10px;
  cursor: pointer;
`;

const kickAction = css`
  color: var(--danger-text);

  &:hover {
    background-color: #fff5f4;
  }
`;

const leaveAction = css`
  color: var(--slate);

  &:hover {
    background-color: var(--sunken);
  }
`;

export function PartyPrepare() {
  const [party, currentPlayers] = useUnit([$newParty, $currentPlayers]);
  const player = useUnit($player);
  const localId = useUnit($localId);
  const [name, setName] = useState(player?.name || "");
  const [copied, setCopied] = useState(false);

  const [location, navigate] = useLocation();

  useEffect(() => {
    if (player?.name) {
      setName(player.name);
    }
  }, [player]);

  if (!party) {
    return (
      <PageLayout>
        <p>группа не найдена</p>
      </PageLayout>
    );
  }

  if (party.status === GAME_STATUS.inProgress) {
    return <DrawingPage />;
  }

  if (party.status === GAME_STATUS.finished) {
    return <FinishedGamePage />;
  }

  if (party.status !== "prepare") {
    return (
      <PageLayout>
        <p>группа уже играет или закончила играть</p>
      </PageLayout>
    );
  }

  const hostName =
    (party.host && currentPlayers[party.host]?.name) || party.host;
  const imHost = localId === party.host;

  const myIndex = Math.max(
    party.newPlayers.findIndex((p) => p.id === localId),
    0,
  );

  const roomPath = getUrl("room/" + party.name);
  const roomLink = `${window.location.origin}${roomPath}`;

  function copyLink() {
    navigator.clipboard.writeText(roomLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <PageLayout>
      <div className={layout}>
        <section className={card}>
          <div className={cardHeader}>
            <div>
              <div className={roomLabel}>Комната</div>
              <div className={roomName}>{party.name}</div>
            </div>
            {imHost ? (
              <span className={hostBadge}>★ вы — хост</span>
            ) : (
              <span className={hostBadge}>хост: {hostName}</span>
            )}
          </div>

          <div className={linkRow}>
            <span className={linkText}>
              {roomLink.replace(/^https?:\/\//, "")}
            </span>
            <Button
              variant="secondary"
              size={1}
              className={copyButton}
              onClick={copyLink}
            >
              {copied ? "Скопировано ✓" : "Копировать"}
            </Button>
          </div>

          <Placeholder note="цвет, поза, аксессуары">
            <div className={characterRow}>
              <div className={characterAvatar}>
                <PlayerFigure color={figureColor(myIndex)} height={64} />
              </div>
              <div className={characterInfo}>
                <b>Ваш персонаж</b>
                <div className={characterColors}>
                  {FIGURE_COLORS.map((color) => (
                    <span key={color} style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
          </Placeholder>

          <div className={paramRows}>
            <form
              className={paramRow}
              onSubmit={(ev) => {
                ev.preventDefault();

                const n = name.trim();
                if (n !== player?.name) {
                  editUserName(localId, n);
                } else {
                  setName(n);
                }
              }}
            >
              <span>Ваше имя</span>
              <div className={nameField}>
                <TextField maxLen={30} onChange={setName} value={name} />
              </div>
              {name.trim() !== (player?.name || "") && (
                <Button type="submit" variant="secondary" size={1}>
                  ОК
                </Button>
              )}
            </form>
            <div className={paramRow}>
              <span>Раунды</span>
              <div className={paramSelect}>
                <Select
                  value={party.gameParams.rounds}
                  onChange={(value) => {
                    updateGameParams(party.id, {
                      ...party.gameParams,
                      rounds: value,
                    });
                  }}
                  options={[
                    { value: 3, label: "3 раунда" },
                    { value: 5, label: "5 раундов" },
                    { value: 7, label: "7 раундов" },
                    { value: 10, label: "10 раундов" },
                  ]}
                  disabled={!imHost}
                />
              </div>
            </div>
            <div className={paramRow}>
              <span>Слов на выбор</span>
              <div className={paramSelect}>
                <Select
                  value={party.gameParams.wordSuggestions}
                  onChange={(value) => {
                    updateGameParams(party.id, {
                      ...party.gameParams,
                      wordSuggestions: value,
                    });
                  }}
                  options={[
                    { value: 2, label: "2 слова" },
                    { value: 3, label: "3 слова" },
                    { value: 4, label: "4 слова" },
                    { value: 5, label: "5 слов" },
                  ]}
                  disabled={!imHost}
                />
              </div>
            </div>
            <div className={paramRow}>
              <span>Время, сек</span>
              <div className={paramSelect}>
                <Select
                  value={party.gameParams.drawTime || 60}
                  onChange={(value) => {
                    updateGameParams(party.id, {
                      ...party.gameParams,
                      drawTime: value,
                    });
                  }}
                  options={[
                    { value: 10, label: "10 секунд" },
                    { value: 30, label: "30 секунд" },
                    { value: 60, label: "60 секунд" },
                    { value: 90, label: "90 секунд" },
                  ]}
                  disabled={!imHost}
                />
              </div>
            </div>
          </div>

          {imHost && (
            <>
              <Button
                size={3}
                onClick={() => {
                  startParty(party);
                }}
              >
                Начать игру
              </Button>
              <div className={closeRow}>
                <Button
                  variant="text"
                  size={1}
                  onClick={() => {
                    closeParty(party.id);
                  }}
                >
                  закрыть игру
                </Button>
              </div>
            </>
          )}
        </section>

        <aside className={players}>
          <div className={playersHeader}>
            <span>Игроки · {party.newPlayers.length}</span>
            <span>ждём ещё…</span>
          </div>
          {party.newPlayers.map((p, i) => (
            <div key={p.id} className={playerRow}>
              <div className={figureSlot}>
                <PlayerFigure color={figureColor(i)} />
              </div>
              <b>{p.name}</b>
              {p.id === party.host && (
                <span className={playerHostBadge}>хост</span>
              )}
              {p.id === localId && (
                <button
                  className={`${rowAction} ${leaveAction}`}
                  onClick={() => {
                    leaveParty(localId, party.id).then(() => {
                      navigate(getUrl(""));
                    });
                  }}
                >
                  выйти
                </button>
              )}
              {p.id !== localId && imHost && (
                <button
                  className={`${rowAction} ${kickAction}`}
                  onClick={() => {
                    kickPlayer(party.id, p.id);
                  }}
                >
                  Кикнуть
                </button>
              )}
            </div>
          ))}
        </aside>
      </div>
    </PageLayout>
  );
}
