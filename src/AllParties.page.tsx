import React from "react";
import { useUnit } from "effector-react";
import { $allParties } from "./model/app";
import { PageLayout } from "./components/PageLayout.tsx";

export function AllPartiesPage() {
  const allParties = useUnit($allParties);

  return (
    <PageLayout>
      <h1>Все комнаты</h1>

      {allParties.length === 0 ? (
        <h2>Комнат пока нет</h2>
      ) : (
        <ul>
          {allParties.map((party) => {
            const cnt = party.players?.length || 0;

            return (
              <li key={party.id}>
                {party.name} {cnt} {cnt === 1 ? "игрок" : "игроков"}{" "}
                <b>{party.status}</b>
              </li>
            );
          })}
        </ul>
      )}
    </PageLayout>
  );
}
