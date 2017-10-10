import React from 'react';

import BudgetItemForm from './BudgetItemForm';

const BudgetView = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Amount</td>
            <td>{props.income}</td>
          </tr>
        </tbody>

      </table>

      <table>
        <tbody>
          <tr>
            <td>Budget Item</td>
            <td>Amount</td>
          </tr>
          {props.budgetItems.map((budgetItem, index) => (
            <tr key={index}>
              <td>{budgetItem.title}</td>
              <td>{budgetItem.amount}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <BudgetItemForm {...props} />
    </div>
  )
};

BudgetView.propTypes = {

}

export default BudgetView;

