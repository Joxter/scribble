import React, { useEffect, useState } from "react";
import { PageLayout } from "./components/PageLayout.tsx";
import { useUnit } from "effector-react/effector-react.mjs";
import { $localId, $player } from "./model/game.model.ts";
import { $newParty } from "./model/game-new.model.ts";
import { css } from "@linaria/core";
import { TextField } from "./components/TextField.tsx";
import { Button } from "./components/Button.tsx";
import { Select } from "./components/Select.tsx";
import {
  closeParty,
  editPlayerName,
  kickPlayer,
  leaveParty,
  startParty,
  updateGameParams,
} from "./db-things.ts";
import { useLocation } from "wouter";
import { getUrl } from "./utils.ts";
import { GAME_STATUS } from "./types.ts";
import { DrawingPage } from "./Drawing.page.tsx";

export function PartyPrepare() {
  const party = useUnit($newParty);
  const player = useUnit($player);
  const localId = useUnit($localId);
  const [name, setName] = useState(player.name);

  const [location, navigate] = useLocation();

  // console.log(party);

  useEffect(() => {
    if (player.name) {
      setName(player.name);
    }
  }, [player]);

  if (!party.id) {
    return (
      <PageLayout>
        <p>группа не найдена</p>
      </PageLayout>
    );
  }

  if (party.status === GAME_STATUS.inProgress) {
    return <DrawingPage />;
  }

  if (party.status !== "prepare") {
    return (
      <PageLayout>
        <p>группа уже играет или закончила играть</p>
      </PageLayout>
    );
  }

  const hostName =
    party.players.find((p) => p.id === party.host)?.name || party.host;
  const imHost = localId === party.host;

  return (
    <PageLayout>
      <div>
        <h1>Комната "{party.name}"</h1>
        <p>
          хост: <b>{hostName}</b>
        </p>
        <p>Ждем всех игроков [поделиться] {party.id}</p>
        <br />
        <form
          style={{
            maxWidth: "200px",
            display: "grid",
            gap: "4px",
            gridTemplateColumns: "1fr min-content",
          }}
          onSubmit={(ev) => {
            ev.preventDefault();

            const n = name.trim();
            if (n !== player.name) {
              editPlayerName(n);
            } else {
              setName(n);
            }
          }}
        >
          <TextField maxLen={30} label="Имя" onChange={setName} value={name} />
          <Button type="submit">ОК</Button>
        </form>
        <br />
        <div
          style={{
            display: "grid",
            gap: "8px",
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#bddcf3",
            maxWidth: "200px",
          }}
        >
          <Select
            label="Количество раундов"
            value={party.gameParams.rounds}
            onChange={(value) => {
              updateGameParams(party.id, {
                ...party.gameParams,
                rounds: value,
              });
            }}
            options={[
              { value: 3, label: "3 раунда" },
              { value: 5, label: "5 раундов" },
              { value: 7, label: "7 раундов" },
              { value: 10, label: "10 раундов" },
            ]}
            disabled={!imHost}
          />
          <Select
            label="Слов на выбор"
            value={party.gameParams.wordSuggestions}
            onChange={(value) => {
              updateGameParams(party.id, {
                ...party.gameParams,
                wordSuggestions: value,
              });
            }}
            options={[
              { value: 2, label: "2 слова" },
              { value: 3, label: "3 слова" },
              { value: 4, label: "4 слова" },
              { value: 5, label: "5 слов" },
            ]}
            disabled={!imHost}
          />
          <Select
            label="Время"
            value={party.gameParams.drawTime || 60}
            onChange={(value) => {
              updateGameParams(party.id, {
                ...party.gameParams,
                drawTime: value,
              });
            }}
            options={[
              { value: 10, label: "10 секунд" },
              { value: 30, label: "30 секунд" },
              { value: 60, label: "60 секунд" },
              { value: 90, label: "90 секунд" },
            ]}
            disabled={!imHost}
          />
        </div>
        <br />
        <p>Игроки: </p>
        <br />
        <ul>
          {party.players.map((p) => {
            return (
              <li key={p.id}>
                {p.name}{" "}
                {p.id === localId && (
                  <button
                    onClick={() => {
                      leaveParty(party.id).then(() => {
                        navigate(getUrl(""));
                      });
                    }}
                  >
                    выйти
                  </button>
                )}
                {p.id !== localId && imHost && (
                  <button
                    onClick={() => {
                      kickPlayer(party.id, p.id);
                    }}
                  >
                    кикнуть
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        {imHost && (
          <div>
            <button
              onClick={() => {
                startParty(party);
              }}
            >
              Начать игру!
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                closeParty(party.id);
              }}
            >
              закрыть игру
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
