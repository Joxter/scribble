import { useUnit } from "effector-react";
import { GAME_STATUS, Player } from "../types.ts";
import pencilSvg from "./Pencil.svg";
import { $drawing, $newParty } from "../model/game-new.model.ts";
import { closeParty } from "../db-things.ts";

export function ListOfPlayers() {
  const [party, drawing] = useUnit([$newParty, $drawing]);

  const stablePlayers = party.players;
  const innerState = party.gameState;

  const drawingId = drawing.drawing ? drawing.who : null;
  const choosingWordPlayerId =
    innerState.state === "choosing-word" ? innerState.playerId : null;

  return (
    <div>
      <p>
        Комната "{party.name}"
        {party.status === GAME_STATUS.inProgress && (
          <b>
            круг: {(party.gameProgress || []).length}/
            {party.gameParams.rounds}{" "}
          </b>
        )}
        <button
          onClick={() => {
            closeParty(party.id);
          }}
        >
          close
        </button>
      </p>
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
          const isChoosingWord = player.id === choosingWordPlayerId;

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
              {(isChoosingWord || isDrawingPlayer) && (
                <img src={pencilSvg} style={{ width: "18px" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
