import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="player one" playerSymbol="X" />
          <Player playerName="player two" playerSymbol="O"  />
        </ol>
        GAME BOARD
      </div>

    </main>
  )
}

export default App
