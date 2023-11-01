import Game from "./components/Game";
import styled from "styled-components";
import Context from "./components/Context/Context";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Context>
        <Game />
      </Context>
    </Container>
  );
}

export default App;
