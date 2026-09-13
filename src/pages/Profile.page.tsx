import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { PageLayout } from "../components/PageLayout.tsx";
import { TextField } from "../components/TextField.tsx";
import { Button } from "../components/Button.tsx";
import { AvatarPicker } from "../components/AvatarPicker.tsx";
import { ReadOnlyCanvas } from "../components/ReadOnlyCanvas.tsx";
import { $localId, $player, party } from "../model/game-new.model.ts";
import {
  $myPaintings,
  loadMyPaintings,
  type MyPainting,
} from "../model/all-paintings.model.ts";
import { doEventsUndo } from "../model/utils.ts";
import { editUserAvatar, editUserName } from "../db-things.ts";
import { countReactions } from "../utils.ts";
import { parseAvatar } from "../avatar.ts";

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

const stats = css`
  width: 300px;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const statTile = css`
  display: flex;
  align-items: baseline;
  gap: 10px;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 16px;

  & > b {
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -0.5px;
    font-variant-numeric: tabular-nums;
  }

  & > span {
    font-size: 14px;
    font-weight: 700;
    color: var(--slate);
  }
`;

/* разбивка по эмодзи — под плиткой реакций, мелочью */
const statBreakdown = css`
  margin-left: auto;
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
`;

const roomTitle = css`
  font-size: 14px;
  font-weight: 800;
  color: var(--slate);
  padding: 0 6px;
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

  const byEmoji: Record<string, number> = {};
  paintings.forEach((painting) => {
    Object.entries(countReactions(painting.reactions)).forEach(([e, count]) => {
      byEmoji[e] = (byEmoji[e] || 0) + count;
    });
  });
  const reactionsTotal = Object.values(byEmoji).reduce((a, b) => a + b, 0);

  // комнату рисунок знает сам (связь partyPaintings), порядок групп — по
  // первому попавшемуся рисунку, то есть по самому свежему
  const groups: { key: string; title: string; items: MyPainting[] }[] = [];

  paintings.forEach((painting) => {
    const key = painting.party?.id || "others";
    const group = groups.find((it) => it.key === key);

    if (group) {
      group.items.push(painting);
    } else {
      groups.push({
        key,
        title: painting.party?.name || "Комната не сохранилась",
        items: [painting],
      });
    }
  });

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

        <aside className={stats}>
          <div className={listHeader}>
            <span>Статистика</span>
          </div>

          <div className={statTile}>
            <b>{myParties.length}</b>
            <span>игр</span>
          </div>
          <div className={statTile}>
            <b>{paintings.length}</b>
            <span>рисунков</span>
          </div>
          <div className={statTile}>
            <b>{reactionsTotal}</b>
            <span>реакций собрано</span>
            <span className={statBreakdown}>
              {Object.entries(byEmoji).map(([emoji, count]) => (
                <span key={emoji}>
                  {emoji} {count}
                </span>
              ))}
            </span>
          </div>
        </aside>
      </div>

      <section className={gallery}>
        <div className={listHeader}>
          <span>Мои рисунки · {paintings.length}</span>
          <span>по комнатам, новые сверху</span>
        </div>

        {paintings.length === 0 && (
          <p className={empty}>Вы ещё ничего не нарисовали</p>
        )}

        {groups.map((group) => (
          <React.Fragment key={group.key}>
            <p className={roomTitle}>
              {group.title} · {group.items.length}
            </p>
            <div className={grid}>
              {group.items.map((painting) => {
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
          </React.Fragment>
        ))}
      </section>
    </PageLayout>
  );
}
