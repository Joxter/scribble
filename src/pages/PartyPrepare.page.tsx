import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/PageLayout.tsx";
import { useUnit } from "effector-react/effector-react.mjs";
import {
  $currentPlayers,
  $localId,
  $newParty,
  $player,
} from "../model/game-new.model.ts";
import { css } from "@linaria/core";
import { TextField } from "../components/TextField.tsx";
import { Button } from "../components/Button.tsx";
import { Select } from "../components/Select.tsx";
import {
  closeParty,
  editUserName,
  kickPlayer,
  leaveParty,
  startParty,
  updateGameParams,
} from "../db-things.ts";
import { useLocation } from "wouter";
import { getUrl } from "../utils.ts";
import { GAME_STATUS } from "../types.ts";
import { DrawingPage } from "./Drawing.page.tsx";
import { FinishedGamePage } from "./FinishedGame.page.tsx";

const nameForm = css`
  max-width: 200px;
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr min-content;
`;

const gameParams = css`
  display: grid;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: #bddcf3;
  max-width: 200px;
`;

export function PartyPrepare() {
  const [party, currentPlayers] = useUnit([$newParty, $currentPlayers]);
  const player = useUnit($player);
  const localId = useUnit($localId);
  const [name, setName] = useState(player?.name || "");

  const [location, navigate] = useLocation();

  useEffect(() => {
    if (player?.name) {
      setName(player.name);
    }
  }, [player]);

  if (!party) {
    return (
      <PageLayout>
        <p>группа не найдена</p>
      </PageLayout>
    );
  }

  if (party.status === GAME_STATUS.inProgress) {
    return <DrawingPage />;
  }

  if (party.status === GAME_STATUS.finished) {
    return <FinishedGamePage />;
  }

  if (party.status !== "prepare") {
    return (
      <PageLayout>
        <p>группа уже играет или закончила играть</p>
      </PageLayout>
    );
  }

  const hostName = currentPlayers[party.host]?.name || party.host;
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
          className={nameForm}
          onSubmit={(ev) => {
            ev.preventDefault();

            const n = name.trim();
            if (n !== player?.name) {
              editUserName(localId, n);
            } else {
              setName(n);
            }
          }}
        >
          <TextField maxLen={30} label="Имя" onChange={setName} value={name} />
          <Button type="submit">ОК</Button>
        </form>
        <br />
        <div className={gameParams}>
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
        <ul>
          {party.newPlayers.map((p) => {
            return (
              <li key={p.id}>
                {p.name}{" "}
                {p.id === localId && (
                  <button
                    onClick={() => {
                      leaveParty(localId, party.id).then(() => {
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
