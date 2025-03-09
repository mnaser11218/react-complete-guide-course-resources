import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data'
import CoreConcepts from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
function App() {
  const handleSelect = ()=> console.log("clicked select")
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

        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Component1</TabButton>
            <TabButton onSelect={handleSelect}>Component2</TabButton>
            <TabButton onSelect={handleSelect}>Component3</TabButton>

            <TabButton onSelect={handleSelect}>Component4</TabButton>

          </menu>

        </section>
        <h2>Time to get started!!</h2>
      </main>

    </div>
  );
}

export default App;
