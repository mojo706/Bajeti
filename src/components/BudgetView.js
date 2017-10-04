import React from 'react';

import BudgetItemForm from './BudgetItemForm';

const BudgetView = (props) => {
  console.log('props', props)


  const budgetItems = props.budgetItems.map((items) => {
    return {
      items
    }
  })

  // const budgetItem = (
  //   {props.budgetItems.map(item => (
  //     <tr>
  //       <td></td>
  //       <td></td>
  //     </tr>

  //   ))}

  //)
  return (
    <div>
      <table>
        <tr>
          <td>Amount</td>
          <td>{props.income}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td>Budget Item</td>
          <td>Amount</td>
        </tr>
      </table>

      <BudgetItemForm />
    </div>
  );
};

BudgetView.propTypes = {

}

export default BudgetView;

