import React from 'react';

const BudgetItemForm = (props) => (
  
  <form action="">
    <h4>Enter a Budget Item</h4>
    <input type="text" name="item" placeholder="Enter Budget item"/>
    <input type="text" name="amount" placeholder="Enter Budget amount"/>
    <button>Add Item</button>
  </form>

);

export default BudgetItemForm;