import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player one" symbol="X" />
          <Player initialName="player two" symbol="O"  />
        </ol>
        GAME BOARD
      </div>

    </main>
  )
}

export default App
