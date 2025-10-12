import React, { useState } from "react";
import { useUnit } from "effector-react";
import { newRandomRoomName } from "./utils.ts";
import { $player, createNewParty } from "./model/game.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import cssModule from "./Home.module.css";
import { css } from "@linaria/core";

const title = css`
  color: red;
`;

export function HomePage() {
  const player = useUnit($player);

  if (!player.id) return null;

  return (
    <PageLayout>
      <p className={title}>title red</p>
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
    <div className={cssModule.form}>
      <div className={cssModule.field}>
        <label>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={cssModule.field}>
        <label>Комната</label>
        <div className={cssModule.roomCodeRow}>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button
            onClick={() => {
              alert("todo");
            }}
            className={cssModule.joinButton}
          >
            Войти
          </button>
        </div>
      </div>

      <div className={cssModule.divider}>
        <span>или</span>
      </div>

      <button onClick={handleCreateRoom} className={cssModule.createButton}>
        Создать новую игру
      </button>
    </div>
  );
}
