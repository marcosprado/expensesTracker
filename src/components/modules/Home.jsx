/* eslint jsx-a11y/anchor-is-valid: 0*/
/* eslint no-extend-native: 0*/
/* eslint no-useless-concat: 0*/
/* eslint no-unused-vars: 0*/
/* eslint react-hooks/exhaustive-deps: 0*/

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Transaction from "./Transaction";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`;

export default function Home() {
  const [transactions, updateTransactions] = useState([]);
  const [expense, updateExpense] = useState([0]);
  const [income, updateIncome] = useState([0]);

  //Method used to update the transactions sate. it is passed as props to the Overview Component
  const addTransactionInArray = (payload) => {
    const transactionsArray = [...transactions];
    transactionsArray.push(payload);

    updateTransactions(transactionsArray);
  };

  // Method used to calculate the Balance
  const BalanceMath = () => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });

    updateExpense(exp);
    updateIncome(inc);
  };

  // will update the expense box, the income box and the balance every time the transactions state is changed
  useEffect(() => {
    BalanceMath();
  }, [transactions]);

  return (
    <Container>
      <Overview
        addTransactionInArray={addTransactionInArray}
        expense={expense}
        income={income}
      />
      <Transaction transactions={transactions} />
    </Container>
  );
}
