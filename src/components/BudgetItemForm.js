import React, { Component } from 'react';

class BudgetItemForm extends Component {

  titleInput;
  amountInput;

  handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      title: this.titleInput.value,
      amount: this.amountInput.value
    };
    if((this.titleInput.value || this.amountInput.value)) {
      this.props.addBudgetItem(item)
      this.titleInput.value = '';
      this.amountInput.value = null;
    }
    
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h4>Enter a Budget Item</h4>
        <input
          type="text"
          name="title"
          ref={(input) => { this.titleInput = input }}
          placeholder="Enter Budget item"
          value = {this.props.itemToEdit.title}
          required
        />
        <input
          type="number"
          name="amount"
          ref={(input) => { this.amountInput = input }}
          placeholder="Enter Budget amount"
         value = {this.props.itemToEdit.amount}
          required
        />
        <button >Save Item</button>
      </form>

    )
  }

};

export default BudgetItemForm;
