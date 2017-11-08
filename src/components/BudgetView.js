import React from 'react';

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
               <td><button onClick={(event) => {
                props.editBudgetItem(index)
              }}>Edit</button></td>
              <td><button type="" onClick={() => {
                props.deleteBudgetItem(index)
              }}>Delete</button></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default BudgetView;

