import React, { useState } from "react";
import { useUnit } from "effector-react";
import { $allParties } from "./model/app";
import { getUrl } from "./utils.ts";
import { $player, createNewParty, editPlayerName } from "./model/game.model.ts";

export function AllParties() {
  const [allParties, player] = useUnit([$allParties, $player]);

  return (
    <div style={{ padding: "20px" }}>
      {player && player.name && <EditPlayerName name={player.name} />}
      <h2>All Parties</h2>
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
      <CreateNewParty />
    </div>
  );
}

function CreateNewParty() {
  const [newPartyName, setNewPartyName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateParty = async () => {
    if (!newPartyName.trim()) return;

    setIsCreating(true);
    try {
      await createNewParty(newPartyName.trim());
      setNewPartyName("");
    } catch (error) {
      console.error("Failed to create party:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <form
      style={{
        margin: "8px 0",
        display: "grid",
        gridTemplateColumns: "1fr min-content",
        gap: "8px",
        maxWidth: "300px",
      }}
      onSubmit={(ev) => {
        ev.preventDefault();
        handleCreateParty();
      }}
    >
      <input
        type="text"
        value={newPartyName}
        onChange={(e) => setNewPartyName(e.target.value)}
        disabled={isCreating}
      />
      <button type="submit" disabled={!newPartyName.trim() || isCreating}>
        {isCreating ? "Создаю..." : "Создать"}
      </button>
    </form>
  );
}

function EditPlayerName(props: { name: string }) {
  const [name, setName] = useState(props.name);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateParty = async () => {
    if (!name.trim()) return;

    setIsCreating(true);
    try {
      await editPlayerName(name.trim());
      setName(name.trim());
    } catch (err) {
      console.error(err);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div>
      <p>Имя</p>
      <form
        style={{
          margin: "8px 0",
          display: "grid",
          gridTemplateColumns: "1fr min-content",
          gap: "8px",
          maxWidth: "300px",
        }}
        onSubmit={(ev) => {
          ev.preventDefault();
          handleCreateParty();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isCreating}
        />
        <button type="submit" disabled={!name.trim() || isCreating}>
          {isCreating ? "Сохраня..." : "Сохранить"}
        </button>
      </form>
    </div>
  );
}
