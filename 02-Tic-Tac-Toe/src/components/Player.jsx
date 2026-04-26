import React, { useState } from "react";

const Player = ({ initialName, symbol , isActivePlayer , onRename }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const [playerNameInput , setPlayerNameInput] = useState(initialName)

  const handleEditClick = () => {
    setIsEditing(editing => !editing);
    if(isEditing && playerNameInput.length){
      setPlayerName(playerNameInput)
      onRename(symbol , playerNameInput)
    }
  };
  const handleChangePlayerName = (event) => {
      setPlayerNameInput(event.target.value);
  };
  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerNameInput}
            onChange={handleChangePlayerName}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
};

export default Player;
