import { Title } from '@mui/icons-material'
import Img from './assets/react-core-concepts.png'
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js'
function App() {
  const [value, setValue] = useState()

  let renderedValue = <p>Please select value</p>

  if (value) {
    renderedValue =  CORE_CONCEPTS.map((ele)=>{
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

  const handleSelect = (input)=> {
  setValue(input) 
  console.log(value)
  }
  return (
    <div>
     <Header/>
      <main>
       
        <CoreConcepts/>

        <section id="examples">
          <h2>examples</h2>
          <menu>
            <TabButton isSelected={value === 'Components'} onSelect={()=>handleSelect('Components')}>Components</TabButton>
            <TabButton isSelected={value === 'JSX'} onSelect={()=>handleSelect('JSX')} >JSX</TabButton>
            <TabButton isSelected={value === 'Props'} onSelect={()=>handleSelect('Props')}>Props</TabButton>

            <TabButton isSelected={value === 'State'} onSelect={()=>handleSelect('State')}>State</TabButton>

          </menu>
          {renderedValue}

        </section>
       
    
       
      </main>
     

    </div>
  );
}

export default App;
