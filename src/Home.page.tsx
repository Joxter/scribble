import React, { useState } from "react";
import { useUnit } from "effector-react";
import { $allParties } from "./model/app";
import { getUrl } from "./utils.ts";
import { $player, createNewParty, editPlayerName } from "./model/game.model.ts";

export function HomePage() {
  const player = useUnit($player);

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        alignContent: "center",
        gap: "16px",
      }}
    >
      {player && player.name && <EditPlayerName name={player.name} />}
      <AllParties />
      <CreateNewParty />

      <div style={{ marginTop: "20px" }}>
        <h3>Canvas Demos</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <a
            href={getUrl("?simple")}
            style={{
              textDecoration: "none",
              padding: "8px",
              background: "#f0f0f0",
              borderRadius: "4px",
            }}
          >
            📝 Simple Canvas (SVG-based)
            <div style={{ fontSize: "12px", color: "#666" }}>
              Pure React + useState with SVG rendering
            </div>
          </a>
          <a
            href={getUrl("?canvas-html5")}
            style={{
              textDecoration: "none",
              padding: "8px",
              background: "#e8f4f8",
              borderRadius: "4px",
            }}
          >
            🎨 HTML5 Canvas (Path2D + svgInk)
            <div style={{ fontSize: "12px", color: "#666" }}>
              Canvas rendering using svgInk via Path2D
            </div>
          </a>
          <a
            href={getUrl("?canvas-optimized")}
            style={{
              textDecoration: "none",
              padding: "8px",
              background: "#f0f8e8",
              borderRadius: "4px",
            }}
          >
            🚀 Optimized Canvas (Direct rendering)
            <div style={{ fontSize: "12px", color: "#666" }}>
              Maximum performance, direct Canvas 2D API
            </div>
          </a>
        </div>
      </div>

      <a href={getUrl("?words")}>Слова</a>
    </div>
  );
}

export function AllParties() {
  const allParties = useUnit($allParties);

  return (
    <div>
      <h2>All Parties</h2>
      {allParties.length === 0 ? (
        <p>No parties found</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {allParties.map((party) => {
            const cnt = party.players2?.length || 0;

            return (
              <li key={party.id} style={{ marginBottom: "10px" }}>
                <a href={getUrl("?" + party.id)}>
                  {party.name} (игроков: {cnt})
                </a>
              </li>
            );
          })}
        </ul>
      )}
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
        <button
          type="submit"
          disabled={!name.trim() || isCreating || name === props.name}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}
