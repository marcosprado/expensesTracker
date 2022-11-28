/* eslint jsx-a11y/anchor-is-valid: 0*/
/* eslint no-extend-native: 0*/
/* eslint no-useless-concat: 0*/
/* eslint no-unused-vars: 0*/
/* eslint react-hooks/exhaustive-deps: 0*/

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Transaction from "./Transaction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`;

export default function Home(props) {
  const [transactions, updateTransactions] = useState([]);

  return (
    <Container>
      <Overview />
      <Transaction />
    </Container>
  );
}
