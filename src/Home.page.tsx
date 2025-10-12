import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { getUrl, newRandomRoomName } from "./utils.ts";
import { $player } from "./model/game.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import { TextField } from "./components/TextField.tsx";
import cssModule from "./Home.module.css";
import { useLocation } from "wouter";
import { createNewParty, getMyParty } from "./model/game-new.model.ts";
import { Button } from "./components/Button.tsx";

export function HomePage() {
  const player = useUnit($player);
  const [location, navigate] = useLocation();

  useEffect(() => {
    getMyParty()
      .then(() => {
        navigate(getUrl("current-party"));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
    <div className={cssModule.form}>
      <TextField label="Имя" value={name} onChange={setName} />

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

      <Button onClick={handleCreateRoom}>Создать новую игру</Button>
    </div>
  );
}
