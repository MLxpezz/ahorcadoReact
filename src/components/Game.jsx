import Body from "./subcomponents/Body";
import Word from "./subcomponents/Word";
import Input from "./subcomponents/Input";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121126;
  gap: 100px;

  & h1 {
    color: #DB2EF2;
    margin-top: 80px;
    letter-spacing: 10px;
  }
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
