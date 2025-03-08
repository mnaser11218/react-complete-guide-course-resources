import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data'
import CoreConcepts from './components/CoreConcept';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
     <Header/>
      <main>
        <section id="core-concepts">
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
        </ul>
        </section>
        <h2>Time to get started!!</h2>
      </main>
    </div>
  );
}

export default App;
