import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header';
import Examples from './components/Examples.jsx';
function App() {
  return (
    <div>
     <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  )
}

export default App;
