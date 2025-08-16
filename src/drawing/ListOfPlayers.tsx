import { useUnit } from "effector-react";
import { $party, $localId } from "../model/game.model.ts";

export function ListOfPlayers() {
  const party = useUnit($party);
  const localId = useUnit($localId);

  if (!party.players || party.players.length === 0) {
    return <div>No players</div>;
  }

  return (
    <div
      style={
        {
          // padding: "16px",
          // border: "1px solid #ccc",
          // borderRadius: "8px",
          // backgroundColor: "#f9f9f9",
        }
      }
    >
      <div
        style={{
          display: "grid",
          alignContent: "start",
          gap: "4px",
          //
        }}
      >
        {party.players.map((player) => {
          const isCurrentPlayer = player.id === localId;
          const isDrawingPlayer = player.id === party.gameState.drawing;

          return (
            <div
              key={player.id}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #ddd",
                fontWeight: isCurrentPlayer ? "bold" : "normal",
              }}
            >
              {player.name}
              {isDrawingPlayer && " (рисует)"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
