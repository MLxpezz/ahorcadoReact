import Game from "./components/Game";
import styled, { createGlobalStyle } from "styled-components";
import Context from "./components/Context/Context";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Context>
        <Game />
      </Context>
    </Container>
  );
}

export default App;
