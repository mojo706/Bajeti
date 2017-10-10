import React, { Component } from 'react';

class BudgetItemForm extends Component {

  titleInput;
  amountInput;

  constructor(props) {
    super(props);
    this.state = {
      item:
      {

        title: '',
        amount: 0
      }
    };

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBudgetItems(this.state.item)
  };

  render() {
    return (
      <form action="" >
        <h4>Enter a Budget Item</h4>
        <input
          type="text"
          name="title"
          ref={(input) => { this.titleInput = input }}
          placeholder="Enter Budget item"
        />
        <input
          type="number"
          name="amount"
          ref={(input) => { this.amountInput = input }}
          placeholder="Enter Budget amount"

        />
        <button >Save Item</button>
      </form>

    )
  }

};

export default BudgetItemForm;
