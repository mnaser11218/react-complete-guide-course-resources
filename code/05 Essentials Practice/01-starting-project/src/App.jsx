import { useState } from "react"
import pic from "./assets/investment-calculator-logo.png"
import InputGroups from "./components/InputGroups"




function App() {
  const [initialInvestment, setInitialInvestment] = useState('0')
  const [annualInvestment, setAnnualInvestment] = useState('0')
  const handleAnnualInvestment = (updatedinvestment)=>setAnnualInvestment(updatedinvestment)
  const handleInitialInvestment = (updatedinvestment)=> setInitialInvestment(updatedinvestment)

  

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
    handleUpdateInputOne: handleExpectedReturn,
    labelTwo: "Duration",
    secondInput:duration,
    handleUpdateInputTwo: handleDuration
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

 





    
    </>
  )
}

export default App
