import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import CoreConcepts from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
function App() {
  const [value, setValue] = useState("")

  const handleSelect = (input)=> {
  setValue(input) 
  console.log(value)
  }
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
            <TabButton onSelect={()=>handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('JSX')} >JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>

            <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>

          </menu>
          {CORE_CONCEPTS.map((ele)=>{
            if(ele.title == value){
              return(
                <div id="tab-content">
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
                </div>
              )
            }
           
          })
       
}

        </section>
       
        {/* <h2>{value}</h2> */}
       
      </main>
     

    </div>
  );
}

export default App;
