import React from 'react';
import PropTypes from 'prop-types';

class IncomeForm extends React.Component {

  textInput = null;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.changeIncome(this.textInput.value);
    this.textInput.value = "";
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Enter Cash At Hand</h3>
          <input
            type="number"
            name="income"
            //onChange={this.handleChange}
            ref = {(input)=> {this.textInput = input}}
            defaultValue={this.props.income}
            placeholder="Enter the income amount here" />
          <button> Go </button>
        </form>
      </div>
    )
  }
}

IncomeForm.propTypes = {
  income: PropTypes.number.isRequired,
  changeIncome: PropTypes.func.isRequired
};

export default IncomeForm;
