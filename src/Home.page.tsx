import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { getUrl, newRandomRoomName } from "./utils.ts";
import { $player } from "./model/game.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import { TextField } from "./components/TextField.tsx";
import cssModule from "./Home.module.css";
import { useLocation } from "wouter";
import {
  createNewParty,
  getMyParty,
  getPartyByName,
  joinToParty,
} from "./model/game-new.model.ts";
import { Button } from "./components/Button.tsx";

export function HomePage() {
  const player = useUnit($player);
  const [location, navigate] = useLocation();

  useEffect(() => {
    getMyParty()
      .then((party) => {
        if (party) {
          navigate(getUrl("current-party"));
        }
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
  const [location, navigate] = useLocation();

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
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            getPartyByName(roomCode).then((party) => {
              if (party) {
                return joinToParty(party.id).then(() => {
                  navigate(getUrl("current-party"));
                });
              }
            });
          }}
          className={cssModule.roomCodeRow}
        >
          <TextField label="Комната" value={roomCode} onChange={setRoomCode} />
          <button type="submit" className={cssModule.joinButton}>
            Войти
          </button>
        </form>
      </div>

      <div className={cssModule.divider}>
        <span>или</span>
      </div>

      <Button onClick={handleCreateRoom}>Создать новую игру</Button>
    </div>
  );
}
