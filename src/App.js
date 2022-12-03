import styled from "styled-components";
import Home from "./components/modules/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expenses Tracker</Header>
      <Home />
    </Container>
  );
}

export default App;
