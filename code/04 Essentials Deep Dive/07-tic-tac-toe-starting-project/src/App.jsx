import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player one" symbol="X" />
          <Player name="player two" symbol="O"  />
        </ol>
        GAME BOARD
      </div>

    </main>
  )
}

export default App
