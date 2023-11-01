import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { wordContext } from "../Context/Context";

const LiContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 5px;
`;

const Word = () => {
  const { word, letter } = useContext(wordContext);
  const [updateWord, setUpdateWord] = useState([]);

  useEffect(() => {
    let copyWord = word.split('').map(char => {
        return char = '_';
    });
    setUpdateWord(copyWord);
    console.log(updateWord);
  }, [word]);

  useEffect(() => {
    let auxArr = [...updateWord];
    word.split('').forEach((c, index) => {
        if(c === letter) {
            auxArr[index] = letter;
        }
    })
    setUpdateWord(auxArr);
  }, [letter]);

  return (
    <>
      <LiContainer>
        {updateWord.map((char, index) => {
          return <p key={index}>{char}</p>;
        })}
      </LiContainer>
    </>
  );
};

export default Word;
