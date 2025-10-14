import { useUnit } from "effector-react";
import { Player } from "../types.ts";
import pencilSvg from "./Pencil.svg";
import { $newParty } from "../model/game-new.model.ts";

export function ListOfPlayers() {
  const party = useUnit($newParty);

  const stablePlayers = party.gameState.players.map((id) => {
    return party.players.find((p) => p.id === id)!;
  });

  const drawingId = "not implemented, take something from gameState";

  return (
    <div>
      <p>Комната "{party.name}"</p>
      <br />
      <p>Игроки:</p>

      <div
        style={{
          display: "grid",
          alignContent: "start",
          gap: "4px",
        }}
      >
        {stablePlayers?.map((player: Player) => {
          const isDrawingPlayer = player.id === drawingId;

          return (
            <div
              key={player.id}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #ddd",
              }}
            >
              {player.name}{" "}
              {isDrawingPlayer && (
                <img src={pencilSvg} style={{ width: "18px" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
