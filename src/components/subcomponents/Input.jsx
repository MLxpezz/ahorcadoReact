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

  const handleButton = (e) => {
    setChar(e.target.innerHTML);
    e.target.disabled = buttonDisabled;
  };

  return (
    <ButtonsContainer>
      {letters.split("").map((btn) => {
        return (
          <Button
            key={btn}
            onClick={(e) => {
              handleButton(e);
            }}
          >
            {btn}
          </Button>
        );
      })}
    </ButtonsContainer>
  );
};

export default Input;
