import React, { Component } from 'react';

import IncomeForm from './components/IncomeForm';
import BudgetView from './components/BudgetView';
import BudgetItemForm from './components/BudgetItemForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      itemToEdit: {},
      budgetItems: [
        {
          title: "Transport",
          amount: 5000
        }
      ],
      incomeFormVisible: true,
      currentBudgetItemIndex: null
    };
  }
  changeIncome = (newIncome) => {
    this.setState({ income: newIncome });
  };

  addBudgetItem = (item) => {
    const budgetItems = [...this.state.budgetItems];
    budgetItems.push(item);
    this.setState({
      budgetItems: budgetItems
    });
  };

  deleteBudgetItem = (index) => {
    const budgetItems = [...this.state.budgetItems];
    budgetItems.splice(index, 1);
    this.setState({
      budgetItems: budgetItems
    });
  };

  setCurrentBudgetItemIndex = (index) => {
    console.log('index', this.state.currentBudgetItemIndex);
    this.setState({currentBudgetItemIndex:index});
    
  }
  
  editBudgetItem = (index) => {
    const itemToEdit = this.state.budgetItems[index];
    // const prevBudgetItems = [...this.state.budgetItems];
    console.log('item to edit', itemToEdit)
    this.setState({
      itemToEdit: itemToEdit
    })
    // prevBudgetItems[index] = updatedItem;
    // this.setState({
    //   budgetItems: prevBudgetItems
    // });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  saveItems = (event) => {
    event.preventDefault()
    console.log(this.state);
  }
  render() {
    const budgetItems = this.state.budgetItems;
    const income = this.state.income
    const itemToEdit = this.state.itemToEdit;

    const props = { budgetItems, income, addBudgetItem: this.addBudgetItem, handleChange: this.handleChange, saveItems: this.saveItems, deleteBudgetItem: this.deleteBudgetItem, editBudgetItem: this.editBudgetItem, itemToEdit, setCurrentBudgetItemIndex: this.setCurrentBudgetItemIndex}
    return (
      <div>
        <IncomeForm income={this.state.income} changeIncome={this.changeIncome} />
        <BudgetView {...props} />
        <BudgetItemForm addBudgetItem={this.addBudgetItem} itemToEdit={this.state.itemToEdit} />
      </div>

    );
  };
};

export default App;
