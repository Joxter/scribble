import React, { useState } from "react";
import { useUnit } from "effector-react";
import { $allParties } from "./model/app";
import { getUrl, newRandomRoomName } from "./utils.ts";
import { $player, createNewParty, editPlayerName } from "./model/game.model.ts";
import { Link } from "wouter";
import css from "./Home.module.css";

export function HomePage() {
  const player = useUnit($player);

  if (!player.id) return null;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Drawinchi!</h1>
      <CreateNewParty />

      <div className={css.footer}>
        <Link href={getUrl("allparties")}>Все комнаты</Link>
        <Link href={getUrl("words")}>Слова</Link>
        <Link href={getUrl("paintings")}>Картины</Link>
      </div>
    </div>
  );
}

function CreateNewParty() {
  const player = useUnit($player);
  const [roomCode, setRoomCode] = useState("");
  const [name, setName] = useState(player.name);

  const [newPartyName, setNewPartyName] = useState(newRandomRoomName().trim());

  const handleCreateRoom = async () => {
    try {
      await createNewParty(newPartyName);
    } catch (error) {
      console.error("Failed to create party:", error);
    }
  };

  return (
    <div className={css.form}>
      <div className={css.field}>
        <label>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={css.field}>
        <label>Комната</label>
        <div className={css.roomCodeRow}>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button
            onClick={() => {
              alert("todo");
            }}
            className={css.joinButton}
          >
            Войти
          </button>
        </div>
      </div>

      <div className={css.divider}>
        <span>или</span>
      </div>

      <button onClick={handleCreateRoom} className={css.createButton}>
        Создать новую игру
      </button>
    </div>
  );
}
