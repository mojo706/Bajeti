import React, { Component } from 'react';

import IncomeForm from './components/IncomeForm';
import BudgetView from './components/BudgetView';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      budgetItems: [
        {
          title: "Transport",
          amount: 5000
        }
      ],
      incomeFormVisible: true,
    };
  }
  changeIncome = (newIncome) => {
    this.setState({ income: newIncome });
  };

  // addBudgetItem = (prevState) => {
  //   this.setState({
  //     budgetItems: prevState.budgetItems.concat(prevState.item)
  //   });
  // };

  addBudgetItem = (prevState, item) => {
    this.setState({
      budgetItems: prevState.budgetItems.concat(prevState.item)
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const budgetItems = this.state.budgetItems;
    const income = this.state.income
    const props = { budgetItems, income, addBudgetItem: this.addBudgetItem, handleChange: this.handleChange }
    return (
      <div>
        <IncomeForm income={this.state.income} changeIncome={this.changeIncome} />
        <BudgetView {...props} />
      </div>

    );
  };
};

export default App;
