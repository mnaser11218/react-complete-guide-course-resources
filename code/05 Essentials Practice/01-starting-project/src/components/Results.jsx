import React from 'react'
import { calculateInvestmentResults } from '../util/investment'
import { formatter } from '../util/investment'
function Results({initialInvestment,
    annualInvestment,
    expectedReturn,
    duration}) {

const finalResults = calculateInvestmentResults({initialInvestment,
    annualInvestment,
    expectedReturn,
    duration})
  return (
 <table id="result">
  <thead>
    <tr>
    <th>Year</th>
    <th>Investment Value</th>
    <th>Interest (Year)</th>
    <th>Total interest</th>
    <th>Interest Capital</th>
    </tr>
   
  </thead>
    <tbody>
  {finalResults.map((results, index)=>(
  <tr>
    <td>{results.year}</td>
    <td>{formatter.format(results.annualInvestment)}</td>
    <td>{formatter.format(results.valueEndOfYear)}</td>
    <td>{formatter.format(results.interest)}</td>
    <td>{formatter.format(results.interest)}</td>
   
  </tr>

))}
</tbody>
 
     </table>
        
    
  )
}

export default Results