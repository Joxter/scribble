import React, { useState } from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { Link } from "wouter";
import { PageLayout } from "../components/PageLayout.tsx";
import { TextField } from "../components/TextField.tsx";
import { $player, party } from "../model/game-new.model.ts";
import { editUserName } from "../db-things.ts";
import { getUrl } from "../utils.ts";

const section = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
`;

const nameRow = css`
  display: flex;
  gap: 4px;
`;

const saveButton = css`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #22c55e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 500;

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const heading = css`
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
`;

const partiesList = css`
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
  margin: 0;
`;

export function ProfilePage() {
  const player = useUnit($player);
  const allMyParties = useUnit(party.$allMyParties);
  const [name, setName] = useState(player?.name || "");

  const handleSaveName = () => {
    if (player && name.trim()) {
      editUserName(player.id, name.trim());
    }
  };

  const isNameUnchanged = name.trim() === (player?.name || "");

  return (
    <PageLayout>
      <div className={section}>
        <h2 className={heading}>Профиль</h2>

        <div className={nameRow}>
          <TextField label="Имя" value={name} onChange={setName} />
          <button
            onClick={handleSaveName}
            className={saveButton}
            disabled={isNameUnchanged}
          >
            Сохранить
          </button>
        </div>

        <h3 style={{ margin: 0, fontSize: 16, color: "#1f2937" }}>
          Мои комнаты
        </h3>
        {allMyParties.length === 0 ? (
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
            Нет комнат
          </p>
        ) : (
          <ul className={partiesList}>
            {allMyParties.map((p) => (
              <li key={p.id}>
                <Link href={getUrl(`room/${p.name}`)}>
                  {p.name} <b>{p.status}</b>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageLayout>
  );
}
