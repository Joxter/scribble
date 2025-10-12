import React from "react";
import { PageLayout } from "./components/PageLayout.tsx";
import { useUnit } from "effector-react/effector-react.mjs";
import { $localId } from "./model/game.model.ts";
import { $newParty } from "./model/game-new.model.ts";

export function PartyPrepare() {
  const party = useUnit($newParty);
  const localId = useUnit($localId);
  console.log(party);

  if (!party.id) {
    return (
      <PageLayout>
        <p>группа не найдена</p>
      </PageLayout>
    );
  }

  if (party.status !== "prepare") {
    return (
      <PageLayout>
        <p>группа уже играет или закончила играть</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div>
        <h1>Комната "{party.name}"</h1>
        <p>Ждем всех игроков [поделиться]</p>
        <br />
        <p>TODO: моё имя (инпут)</p>
        <p>TODO: кнопка выйти</p>
        <br />
        <p>Игроки: </p>
        <ul>
          {party.players.map((p) => {
            return <li>{p.name}</li>;
          })}
        </ul>
        <button
          onClick={() => {
            console.log("ещё не готово");
          }}
        >
          Начать игру!
        </button>
      </div>
    </PageLayout>
  );
}
