import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';


export default function Examples(){
const [value, setValue] = useState()
const handleSelect = (input)=> setValue(input) 
const buttonsElements = <>
<TabButton isSelected={value === 'Components'} onClick={()=>handleSelect('Components')}>Components</TabButton>
<TabButton isSelected={value === 'JSX'} onClick={()=>handleSelect('JSX')} >JSX</TabButton>
<TabButton isSelected={value === 'Props'} onClick={()=>handleSelect('Props')}>Props</TabButton>
<TabButton isSelected={value === 'State'} onClick={()=>handleSelect('State')}>State</TabButton>
</>
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
    return (
        <Section title="examples" id="examples">
            <Tabs buttons={buttonsElements} ButtonWrapper="menu">
                {renderedValue}
            </Tabs>
      </Section>
    )
}