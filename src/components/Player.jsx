import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    // When your current state depends on the previous value update it by passing a function (React Standards)
    // State updating editing prev state
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {!isEditing && "Edit"}
        {isEditing && "Save"}
      </button>
    </li>
  );
};

export default Player;
