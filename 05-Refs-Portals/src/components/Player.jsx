import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const playerNameInputRef = useRef();

  const handleSubmitSetNewPlayerName = (event) => {
    event.preventDefault();
    if (playerNameInputRef.current.value.trim().length) {
      setPlayerName(playerNameInputRef.current.value);
      playerNameInputRef.current.value = "";
    }
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <form onSubmit={handleSubmitSetNewPlayerName}>
        <input ref={playerNameInputRef} type="text" />
        <button>Set Name</button>
      </form>
    </section>
  );
}
