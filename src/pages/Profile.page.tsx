import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { Link } from "wouter";
import { PageLayout } from "../components/PageLayout.tsx";
import { TextField } from "../components/TextField.tsx";
import { Button } from "../components/Button.tsx";
import { AvatarPicker } from "../components/AvatarPicker.tsx";
import { ReadOnlyCanvas } from "../components/ReadOnlyCanvas.tsx";
import { $localId, $player, party } from "../model/game-new.model.ts";
import { $myPaintings, loadMyPaintings } from "../model/all-paintings.model.ts";
import { doEventsUndo } from "../model/utils.ts";
import { editUserAvatar, editUserName } from "../db-things.ts";
import { countReactions, getUrl } from "../utils.ts";
import { parseAvatar } from "../avatar.ts";
import { GAME_STATUS } from "../types.ts";

const layout = css`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 815px) {
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

  @media (max-width: 815px) {
    width: 100%;
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

const nameRow = css`
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

const nameField = css`
  flex: 1;
  min-width: 0;
`;

const characterBlock = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const characterTitle = css`
  font-size: 15px;
  font-weight: 800;
  color: var(--ink);
`;

const rooms = css`
  width: 300px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 6px;

  @media (max-width: 815px) {
    width: 100%;
  }
`;

const listHeader = css`
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

const roomRow = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 6px;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: var(--sunken);
  }

  & > b {
    font-weight: 800;
    font-size: 15px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const statusBadge = css`
  margin-left: auto;
  flex: none;
  font-size: 11px;
  font-weight: 800;
  border-radius: 999px;
  padding: 2px 8px;
  background-color: var(--sunken);
  color: var(--slate);
`;

const statusLive = css`
  background-color: var(--success-bg);
  color: var(--success-text);
`;

const empty = css`
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
  padding: 6px;
`;

const gallery = css`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
`;

const item = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const word = css`
  font-size: 13px;
  font-weight: 800;
  color: var(--slate);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const tally = css`
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  min-height: 18px;
`;

const STATUS_LABEL: Record<string, string> = {
  [GAME_STATUS.prepare]: "лобби",
  [GAME_STATUS.inProgress]: "идёт",
  [GAME_STATUS.finished]: "финал",
};

export function ProfilePage() {
  const player = useUnit($player);
  const localId = useUnit($localId);
  const myParties = useUnit(party.$allMyParties);
  const paintings = useUnit($myPaintings);
  const [name, setName] = useState(player?.name || "");

  useEffect(() => {
    if (player?.name) setName(player.name);
  }, [player]);

  useEffect(() => {
    if (localId) loadMyPaintings(localId);
  }, [localId]);

  if (!player) return null;

  const avatar = player.avatar || parseAvatar(null, localId);
  const changed = name.trim() !== player.name;

  return (
    <PageLayout>
      <div className={layout}>
        <section className={card}>
          <div className={cardTitle}>
            <b>Профиль</b>
            <span>Имя и человечек видны всем, с кем вы играете</span>
          </div>

          <form
            className={nameRow}
            onSubmit={(ev) => {
              ev.preventDefault();
              const n = name.trim();
              if (n && n !== player.name) editUserName(player.id, n);
            }}
          >
            <span>Ваше имя</span>
            <div className={nameField}>
              <TextField maxLen={30} value={name} onChange={setName} />
            </div>
            {changed && (
              <Button type="submit" variant="secondary" size={1}>
                ОК
              </Button>
            )}
          </form>

          <div className={characterBlock}>
            <b className={characterTitle}>Ваш персонаж</b>
            <AvatarPicker
              value={avatar}
              onChange={(next) => editUserAvatar(player.id, next)}
            />
          </div>
        </section>

        <aside className={rooms}>
          <div className={listHeader}>
            <span>Мои комнаты · {myParties.length}</span>
          </div>
          {myParties.length === 0 && <p className={empty}>Пока ни одной</p>}
          {myParties.map((p) => (
            <Link
              key={p.id}
              href={getUrl(`room/${p.name}`)}
              className={roomRow}
            >
              <b>{p.name}</b>
              <span
                className={`${statusBadge} ${
                  p.status === GAME_STATUS.inProgress ? statusLive : ""
                }`}
              >
                {STATUS_LABEL[p.status] || p.status}
              </span>
            </Link>
          ))}
        </aside>
      </div>

      <section className={gallery}>
        <div className={listHeader}>
          <span>Мои рисунки · {paintings.length}</span>
          <span>из всех комнат, новые сверху</span>
        </div>

        {paintings.length === 0 ? (
          <p className={empty}>Вы ещё ничего не нарисовали</p>
        ) : (
          <div className={grid}>
            {paintings.map((painting) => {
              const totals = countReactions(painting.reactions);

              return (
                <div key={painting.id} className={item}>
                  <ReadOnlyCanvas
                    canvas={doEventsUndo(painting.canvas as any)}
                    size={160}
                    fill
                  />
                  <span className={word} title={painting.word}>
                    {painting.word}
                  </span>
                  <span className={tally}>
                    {Object.entries(totals).map(([emoji, count]) => (
                      <span key={emoji}>
                        {emoji} {count}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </PageLayout>
  );
}
