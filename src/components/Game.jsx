import Body from "./subcomponents/Body";
import Word from "./subcomponents/Word";
import Input from "./subcomponents/Input";
import PlayButton from "./subcomponents/PlayButton";
import styled from "styled-components";
import { useContext } from "react";
import { wordContext } from "./Context/Context";

const Container = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121126;
  gap: 60px;

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
      <Input />
      {(isWin || correctChar === 0) && <PlayButton />}
    </Container>
  );
};

export default Game;
