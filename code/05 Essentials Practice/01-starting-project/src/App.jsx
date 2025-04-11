import { useState } from "react"
import pic from "./assets/investment-calculator-logo.png"
import InputGroups from "./components/InputGroups"
import Results from "./components/Results"

function App() {
  // state for user inputs
  const [initialInvestment, setInitialInvestment] = useState(0)
  const [annualInvestment, setAnnualInvestment] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [duration, setDuration] = useState(0)

  // methods to update state from onclick 
  const handleAnnualInvestment = (updatedinvestment)=>setAnnualInvestment(updatedinvestment)
  const handleInitialInvestment = (updatedinvestment)=> setInitialInvestment(updatedinvestment)
  const handleExpectedReturnUpdate = (updatedReturn)=> setExpectedReturn(updatedReturn)
  const handleDurationUpdate = (durationUpdate)=>setDuration(durationUpdate)

  // mock data to pass down state to results component
  const inputs = [
    {
  labelOne: "Initial Investment",
  firstInput: initialInvestment,
  handleUpdateInputOne: handleInitialInvestment,
  labelTwo: "Annual Investment",
  secondInput:annualInvestment,
  handleUpdateInputTwo: handleAnnualInvestment
  }, 
  {
    labelOne: "Expected Return",
    firstInput: expectedReturn,
    handleUpdateInputOne: handleExpectedReturnUpdate,
    labelTwo: "Duration",
    secondInput:duration,
    handleUpdateInputTwo: handleDurationUpdate
    }, 
  
]
  return (
    <>
    <header id="header">
    <img src={pic}/> 
    <h1>Investment Calculator</h1>
    </header>
    <div id="user-input"> 
    
    {inputs.map((input, index)=>(
      <InputGroups key={index} 
      firstInput={input.firstInput} 
      secondInput={input.secondInput} 
      labelOne={input.labelOne} 
      onUpdateInputOne={input.handleUpdateInputOne} 
      secondLabel={input.labelTwo} 
      onUpdateInputTwo={input.handleUpdateInputTwo} /> 
    ))}

    </div>

    <div >
      <Results 
      initialInvestment={initialInvestment}
      annualInvestment={annualInvestment}
      expectedReturn={expectedReturn}
      duration={duration}
      />
    </div>
    </>
  )
}

export default App
