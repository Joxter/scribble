import React, { useState } from "react";
import { useUnit } from "effector-react";
import { newRandomRoomName } from "./utils.ts";
import { $player, createNewParty } from "./model/game.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import css from "./Home.module.css";

export function HomePage() {
  const player = useUnit($player);

  if (!player.id) return null;

  return (
    <PageLayout>
      <CreateNewParty />
    </PageLayout>
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
