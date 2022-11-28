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

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
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

const AddTransactionView = () => {
  const [amount, setAmount] = useState();

  return (
    <AddTransactionContainer>
      <input placeholder="Amount"></input>
      <input placeholder="Description"></input>
      <TransactionType>
        <input type="radio" id="expense" name="type" value="EXPENSE"></input>
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" name="type" value="EXPENSE"></input>
        <label htmlFor="income">Income</label>
      </TransactionType>
      <AddButton>Add Transaction</AddButton>
    </AddTransactionContainer>
  );
};

export default function Overview() {
  const [isAddButtonVisible, toggleAddBtn] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: R$ 2.000
        <AddButton onClick={() => toggleAddBtn(!isAddButtonVisible)}>
          {isAddButtonVisible ? "Cancel" : "ADD"}
        </AddButton>
      </BalanceBox>
      {isAddButtonVisible && <AddTransactionView />}
    </Container>
  );
}
