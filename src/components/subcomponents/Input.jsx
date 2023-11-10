import { useContext, useState, useEffect } from "react";
import { wordContext } from "../Context/Context";
import styled from "styled-components";

const ButtonsContainer = styled.section`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 42px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 12px;
  background-color: transparent;
  border: 2px solid #db2ef2;
  box-shadow: inset 0px 0px 5px 1px #db2ef2;
  border-radius: 5px;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }
`;

const Input = () => {
  const letters = "abcdefghijklmnñopqrstuvwxyz";
  const [char, setChar] = useState("");
  const { buttonDisabled, word, setLetter, setCorrectChar, correctChar } =
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
