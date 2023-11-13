import { useContext, useState, useEffect } from "react";
import { wordContext } from "../Context/Context";
import styled from "styled-components";

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const LetterButton = styled.button`
  padding: 8px;
  width: 50px;
  font-size: 18px;
  background-color: transparent;
  color: #db2ef2;
  border: 2px solid #db2ef2;
  box-shadow: inset 1px 1px 15px 2px #db2ef2;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Input = () => {
  const [char, setChar] = useState("");
  const { word, setLetter, setCorrectChar, correctChar } =
    useContext(wordContext);

  const letters = "abcdefghijklmnñopqrstuvwxyz";

  useEffect(() => {
    if (char !== "") {
      let charMiss = false;

      word.split("").forEach((c) => {
        if (char === c) {
          setLetter(char);
          charMiss = true;
        }
      });

      if (charMiss === false) {
        setCorrectChar((life) => life - 1);
      }

      console.log(correctChar);
    }
  }, [char]);

  const handleInput = (e) => {
    setChar(e.target.innerHTML);
    console.log(e.target.innerHTML);
  };

  return (
    <Container>
      {letters.split("").map((btn) => {
        return (
          <LetterButton
            onClick={(e) => {
              handleInput(e);
            }}
            key={btn}
          >
            {btn}
          </LetterButton>
        );
      })}
    </Container>
  );
};

export default Input;
