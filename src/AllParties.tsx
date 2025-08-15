import React from "react";
import { useUnit } from "effector-react";
import { $allParties } from "./model/app";
import { getUrl } from "./utils.ts";

export function AllParties() {
  const allParties = useUnit($allParties);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Parties</h1>
      {allParties.length === 0 ? (
        <p>No parties found</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {allParties.map((party) => (
            <li key={party.id} style={{ marginBottom: "10px" }}>
              <a href={getUrl("?" + party.id)}>
                {party.name} ({party.players.length} players)
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
