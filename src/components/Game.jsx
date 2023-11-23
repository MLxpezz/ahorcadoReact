import Body from "./subcomponents/Body";
import Word from "./subcomponents/Word";
import Input from "./subcomponents/Input";
import NewWord from "./subcomponents/NewWord";
import styled from "styled-components";
import { useContext } from "react";
import { wordContext } from "./Context/Context";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121126;
  gap: 35px;

  & h1 {
    color: #DB2EF2;
    margin-top: 30px;
    letter-spacing: 10px;
  }
`;





const Game = () => {

  const {isWin, correctChar} = useContext(wordContext);

  return (
    <Container>
      <h1>Ahorcado</h1>
      <Body />
      <Word />
      {(isWin || correctChar === 0) && <NewWord />}
      <Input />
    </Container>
  );
};

export default Game;
