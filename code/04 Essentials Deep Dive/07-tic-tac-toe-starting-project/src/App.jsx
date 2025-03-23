
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
            <span className="player-name">player one</span>
            <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
    <span className="player"> 
          <span className="player-name">player two</span>
          <span className="player-symbol">O</span>
          </span>
          <button>
            Edit
          </button>
          </li>
        </ol>
        GAME BOARD
      </div>

    </main>
  )
}

export default App
