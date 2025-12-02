import React, { useState } from "react";
import { useUnit } from "effector-react";
import { getUrl, newRandomWords } from "./utils.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import { TextField } from "./components/TextField.tsx";
import css from "./Home.module.css";
import { Link, useLocation } from "wouter";
import { Button } from "./components/Button.tsx";
import {
  createNewParty,
  editUserName,
  getPreparePartyByName,
  joinToParty,
} from "./db-things.ts";
import { $player, party } from "./model/game-new.model.ts";

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
    <div className={css.form}>
      <div className={css.roomCodeRow}>
        <TextField label="Имя" value={name} onChange={setName} />
        <button
          onClick={handleSaveName}
          className={css.joinButton}
          disabled={isNameUnchanged}
        >
          Сохранить
        </button>
      </div>

      <div className={css.field}>
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
          className={css.roomCodeRow}
        >
          <TextField label="Комната" value={roomCode} onChange={setRoomCode} />
          <button type="submit" className={css.joinButton}>
            Войти
          </button>
        </form>
      </div>

      <div className={css.divider}>
        <span>или</span>
      </div>

      <Button onClick={handleCreateRoom}>Создать новую игру</Button>

      <ul className={css.allParties}>
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
