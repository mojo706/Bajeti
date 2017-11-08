import React, { Component } from 'react';

class BudgetItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      amount: null
    };
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.currentItem !== nextprops.currentItem) {
      this.setState({ ...nextprops.currentItem })
    };
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let item = {
      title: this.state.title,
      amount: this.state.amount
    };
    if ((this.state.title || this.state.amount)) {
      this.props.handleSubmit(item);
      this.setState({
        title: '',
        amount: ''
      })
    }

  };

  render() {
    return (

      <form onSubmit={this.handleSubmit} >
        <h4>Enter a Budget Item</h4>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          //ref={(input) => { this.titleInput = input }}
          placeholder="Enter Budget item"
          value={this.props.currentItem.title}
        // required
        />
        <input
          type="number"
          name="amount"
          onChange={this.handleChange}
          //ref={(input) => { this.amountInput = input }}
          placeholder="Enter Budget amount"
          value={this.state.amount || ''}
          required
        />
        <button >Save Item</button>
      </form>

    )
  }

};

export default BudgetItemForm;
