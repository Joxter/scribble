import React, { useState } from "react";
import { useUnit } from "effector-react";
import { getUrl, newRandomWords } from "../utils.ts";
import { PageLayout } from "../components/PageLayout.tsx";
import { TextField } from "../components/TextField.tsx";
import { css } from "@linaria/core";
import { Link, useLocation } from "wouter";
import { Button } from "../components/Button.tsx";
import {
  createNewParty,
  editUserName,
  getPreparePartyByName,
  joinToParty,
} from "../db-things.ts";
import { $player, party } from "../model/game-new.model.ts";

const form = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
`;

const roomCodeRow = css`
  display: flex;
  gap: 4px;
`;

const joinButton = css`
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

const divider = css`
  position: relative;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #d1d5db;
  }

  span {
    position: relative;
    padding: 0 12px;
    background-color: #f9fafb;
    font-size: 12px;
    color: #6b7280;
  }
`;

const allParties = css`
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
`;

export function HomePage() {
  return (
    <PageLayout>
      <CreateNewParty />
    </PageLayout>
  );
}

function CreateNewParty() {
  const player = useUnit($player);
  const allMyParties = useUnit(party.$allMyParties);
  const [roomCode, setRoomCode] = useState("");
  const [name, setName] = useState(player?.name || "");

  const [newPartyName, setNewPartyName] = useState(newRandomWords(3).join("-"));
  const [location, navigate] = useLocation();

  const handleCreateRoom = async () => {
    try {
      const party = await createNewParty(player!.id, newPartyName);
      navigate(getUrl(party.name));
    } catch (error) {
      console.error("Failed to create party:", error);
    }
  };

  const handleSaveName = () => {
    if (player && name.trim()) {
      editUserName(player.id, name.trim());
    }
  };

  const isNameUnchanged = name.trim() === (player?.name || "");

  return (
    <div className={form}>
      <div className={roomCodeRow}>
        <TextField label="Имя" value={name} onChange={setName} />
        <button
          onClick={handleSaveName}
          className={joinButton}
          disabled={isNameUnchanged}
        >
          Сохранить
        </button>
      </div>

      <div>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            editUserName(player!.id, name.trim());
            getPreparePartyByName(roomCode).then((party) => {
              if (party) {
                return joinToParty(player!.id, party.id).then(() => {
                  navigate(getUrl(party.name));
                });
              }
            });
          }}
          className={roomCodeRow}
        >
          <TextField label="Комната" value={roomCode} onChange={setRoomCode} />
          <button type="submit" className={joinButton}>
            Войти
          </button>
        </form>
      </div>

      <div className={divider}>
        <span>или</span>
      </div>

      <Button onClick={handleCreateRoom}>Создать новую игру</Button>

      <ul className={allParties}>
        {allMyParties.map((p) => {
          return (
            <li key={p.id}>
              <Link href={getUrl(`room/${p.name}`)}>
                {p.name} <b>{p.status}</b>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
