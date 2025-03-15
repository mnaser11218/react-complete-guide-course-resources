export default function Examples(){
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
    )
}