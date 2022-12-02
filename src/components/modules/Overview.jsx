/* eslint no-unused-vars: 0*/

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  width: 100%;
`;

const BalanceBox = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

const AddButton = styled.button`
  background: orange;
  color: black;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
`;

const ExpenseIncomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 20px;
  width: 100%;
  justify-content: space-between;
`;

const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid gray;
  padding 10px 20px;
  gap: 5px;
  font-size: 14px;

  & span {
    font-weight: bold;
    font-size: 18px;
    color: red;
  }
`;

const IncomeBox = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid gray;
  padding 10px 20px;
  gap: 5px;
  font-size: 14px;
  & span {
    font-weight: bold;
    font-size: 18px;
    color: green;
  }
`;

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  padding: 10px 20px;

  & input {
    outline: none;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid gray;
  }
`;

const TransactionType = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

//end of styled components

// the AddTransactionView Container is rendered when the "Add" button is clicked
const AddTransactionView = (props) => {
  // the states update whenever the inputs "Amount" and "Description" are changed
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  // Using the method received via props from the Home component, we check the forms information before adding the transaction
  const addTransaction = () => {
    let checkTransaction = false;
    checkTransaction = amount === "" ? false : desc === "" ? false : true;

    if (checkTransaction) {
      props.addTransactionInArray({
        amount: Number(amount),
        desc,
        type,
        id: Date.now,
      });
      props.toggleAddBtn();
      console.log({ amount, desc, type });
    } else {
      alert("Fill in all fields to add transaction");
    }
  };

  return (
    <AddTransactionContainer>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <TransactionType>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label htmlFor="income">Income</label>
      </TransactionType>
      <AddButton onClick={addTransaction}>Add Transaction</AddButton>
    </AddTransactionContainer>
  );
};

export default function Overview(props) {
  // toggleAddBtn updates the state to expand or colapse the AddTransactionView
  const [isAddButtonVisible, toggleAddBtn] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: ${props.income - props.expense}
        <AddButton onClick={() => toggleAddBtn(!isAddButtonVisible)}>
          {isAddButtonVisible ? "Cancel" : "ADD"}
        </AddButton>
      </BalanceBox>
      {isAddButtonVisible && (
        <AddTransactionView
          toggleAddBtn={toggleAddBtn}
          addTransactionInArray={props.addTransactionInArray}
        />
      )}
      <ExpenseIncomeContainer>
        <ExpenseBox>
          Expense <span>${props.expense}</span>
        </ExpenseBox>

        <IncomeBox>
          Income <span> ${props.income}</span>
        </IncomeBox>
      </ExpenseIncomeContainer>
    </Container>
  );
}
