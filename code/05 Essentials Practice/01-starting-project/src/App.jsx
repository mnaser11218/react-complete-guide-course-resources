import pic from "./assets/investment-calculator-logo.png"
import InputGroups from "./components/InputGroups"




function App() {

  const handleAnnualInvestment = ()=>{
    console.log("inside handle annual investment")
  }
  const handleInitialInvestment = ()=>{
    console.log("inside handle initial investment")
  }

  const inputs = [
    {
  labelOne: "Initial Investment",
  onUpdateInputOne: handleInitialInvestment,
  labelTwo: "Annual Investment",
  onUpdateInputTwo: handleAnnualInvestment
  }, 
  // {
  // label: "Annual Investment",
  // onUpdateInput: handleAnnualInvestment
  // }]
]
  return (
    <>
    <header id="header">
    <img src={pic}/> 
    <h1>Investment Calculator</h1>
    </header>
    <div id="user-input"> 

    {inputs.map(input=>(
      <InputGroups labelOne={input.labelOne} onUpdateInputOne={input.onUpdateInputOne} secondLabel={input.labelTwo} onUpdateSecondInput={input.onUpdateInputTwo} /> 
    ))}

   

    {/* <div className="input-group">

      <div>
    <label >Expected Return </label>
    <input></input>
   
    </div>

    <div>
    <label >Duration </label>
    <input></input>
   
    </div>


    </div> */}
    </div>

 





    
    </>
  )
}

export default App
