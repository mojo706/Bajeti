import React, {Component} from 'react';

import IncomeForm from './components/IncomeForm';
import BudgetView from './components/BudgetView';
import BudgetItemForm from './components/BudgetItemForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      currentItem: {},
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
    this.setState({income: newIncome});
  };

  addBudgetItem = (item) => {
    const budgetItems = [...this.state.budgetItems];
    budgetItems.push(item);
    this.setState({
      budgetItems: budgetItems
    });
  };

  deleteBudgetItem = (index) => {
    this.setState(prevState => ({
      budgetItems: prevState.budgetItems.filter((item, currentIndex) => currentIndex !== index)
    }));
  };

  editBudgetItem = (index) => {
    const currentItem = this.state.budgetItems[index];
    this.setState({
      currentItem: currentItem,
      currentBudgetItemIndex: index
    });
  };

  updateBudgetItem = (currentItem) => {
    // takes currentBudgetItemIndex
    // inserts the updated currentBudgetItem into that index
    const currentBudgetItemIndex = this.state.currentBudgetItemIndex;
    this.setState(prevState => ({
      budgetItems: [...prevState.budgetItems.slice(0, currentBudgetItemIndex), currentItem, ...prevState.budgetItems.slice(currentBudgetItemIndex + 1)],
      currentItem: {
        title: '',
        amount: ''
      },
      currentBudgetItemIndex: null
    }));
  };

  render() {
    const budgetItems = this.state.budgetItems;
    const income = this.state.income;
    const currentItem = this.state.currentItem;

    const props = {
      budgetItems,
      income,
      addBudgetItem: this.addBudgetItem,
      saveItems: this.saveItems,
      deleteBudgetItem: this.deleteBudgetItem,
      editBudgetItem: this.editBudgetItem,
      currentItem,
      setCurrentBudgetItemIndex: this.setCurrentBudgetItemIndex
    };
    return (
      <div>
        <IncomeForm income={this.state.income} changeIncome={this.changeIncome}/>
        <BudgetView {...props} />
        <BudgetItemForm handleSubmit={this.state.currentBudgetItemIndex !== null ? this.updateBudgetItem : this.addBudgetItem}
                        currentItem={this.state.currentItem}/>
      </div>

    );
  };
}

export default App;
