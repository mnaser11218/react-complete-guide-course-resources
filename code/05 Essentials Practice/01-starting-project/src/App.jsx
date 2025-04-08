import pic from "./assets/investment-calculator-logo.png"

function App() {
  return (
    <>
    <header id="header">
    <img src={pic}/> 
    <h1>Investment Calculator</h1>
    </header>
    <div id="user-input"> 

    <div  className="input-group">


      <div>
      <label for="initial-investment">Initial Investment </label>
    <input id="initial-investment"></input>
   
    </div>




    <div>
      <label for="initial-investment">Initial Investment  </label>
    <input id="initial-investment"></input>
  
    </div>
    </div>

   

    <div className="input-group">



      <div>
    <label >Expected Return </label>
    <input></input>
   
    </div>

    <div>
    <label >Duration </label>
    <input></input>
   
    </div>


    </div>
    </div>

 





    
    </>
  )
}

export default App
