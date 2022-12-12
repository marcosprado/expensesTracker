/* eslint react-hooks/exhaustive-deps: 0*/

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 22px;
  font-size: 18px;
  gap: 10px;
  font-weight: bold;
  width: 100%;

  & input {
    padding: 10px 20px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 17px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: normal;
  border-radius: 2px;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload.type === "EXPENSE"}>
      <span>{props.payload.desc}</span>
      <span>${props.payload.amount}</span>
    </Cell>
  );
};

// iterates over transaction list and renders it on the page
export default function Transaction(props) {
  const [filteredTransactions, updateFilter] = useState(props.transactions);
  const [filterText, updateFilterText] = useState("");

  const filterData = (filterText) => {
    if (!filterText || !filterText.trim().length) {
      updateFilter(props.transactions);
      return;
    }

    let transactions = [...props.transactions];

    transactions = transactions.filter((transaction) =>
      transaction.desc.toLowerCase().includes(filterText.toLowerCase().trim())
    );
    updateFilter(transactions);
  };

  useEffect(() => filterData(filterText), [props.transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Filter"
        value={filterText}
        onChange={(e) => {
          updateFilterText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransactions?.length
        ? filteredTransactions.map((payload) => (
            <TransactionCell payload={payload}></TransactionCell>
          ))
        : ""}
    </Container>
  );
}
