import PLayer from "./components/PLayer";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PLayer initialName="Player 1" symbol="X" />
          <PLayer initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
