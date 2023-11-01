import Body from "./subcomponents/Body";
import Word from "./subcomponents/Word";
import Input from "./subcomponents/Input";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Game = () => {
  return (
    <Container>
      <h1>Ahorcado</h1>
      <Body />
      <Word />
      <Input />
    </Container>
  );
};

export default Game;
