import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data'
import CoreConcepts from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
function App() {
  const handleSelect = (input)=> {
    console.log(input)
  }
  const [value, setValue] = useState("")
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
            <TabButton onSelect={()=>handleSelect('Component1')}>Component1</TabButton>
            <TabButton onSelect={()=>handleSelect('Component2')} >Component2</TabButton>
            <TabButton onSelect={()=>handleSelect('Component3')}>Component3</TabButton>

            <TabButton onSelect={()=>handleSelect('Component4')}>Component4</TabButton>

          </menu>

        </section>
        <h2>{value}</h2>
      </main>

    </div>
  );
}

export default App;
