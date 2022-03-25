import React,{useContext} from 'react'
import { GlobalContext } from '../context/Globalstate';

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts= transactions.map(transactions => transactions.amount);

  const Income = amounts
  .filter(item =>item>0)
 .reduce((acc, item)=> (acc += item),0)
 .toFixed(2);

 const expense = (
   amounts.filter(item =>item<0).reduce((acc,item) => (acc+=item),0)*-1).toFixed(2);
 
  return (
    <div>
       <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">{Income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">{expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense
