import { useUnit } from "effector-react";
import {
  $party,
  $localId,
  joinParty,
  leaveParty,
  $compiledGameStateAndPaints,
} from "../model/game.model.ts";
import { Player } from "../types.ts";
import pencilSvg from "./Pencil.svg";

export function ListOfPlayers() {
  const party = useUnit($party);
  const localId = useUnit($localId);
  const [gameState] = useUnit($compiledGameStateAndPaints);

  const players = party.players2 || [];

  const joined = !!players.find((p: Player) => p.localId === localId);
  const drawingId =
    gameState.state.state === "drawing" ? gameState.state.playerId : "";

  return (
    <div>
      {joined ? (
        <button
          type="button"
          onClick={() => {
            leaveParty(party.id);
          }}
        >
          покинуть
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            joinParty(party.id);
          }}
        >
          приосединиться
        </button>
      )}
      <div
        style={{
          display: "grid",
          alignContent: "start",
          gap: "4px",
        }}
      >
        {players.length === 0 ? <p>никого нет</p> : null}
        {players?.map((player: Player) => {
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
