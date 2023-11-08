import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { wordContext } from "../Context/Context";

const LiContainer = styled.ul`
  padding: 10px;
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 10px;
`;

const Word = () => {
  const { word, letter } = useContext(wordContext);
  const [updateWord, setUpdateWord] = useState([]);

  useEffect(() => {
    let copyWord = word.split('').map(char => { 
      if(char === ' ') {
        return char = ' ';
      }
      return char = '_';
    });
    setUpdateWord(copyWord);
  }, [word]);

  useEffect(() => {
    let auxArr = [...updateWord];

    word.split('').forEach((c, index) => {
        if(c === letter) {
            auxArr[index] = letter;
        } 
    });

    if(word !== '' && word === auxArr.join('')) {
      alert("ganasteeee!!!")
    }
  
    setUpdateWord(auxArr);
  }, [letter]);

  return (
    <>
      <LiContainer>
        {updateWord.map((char, index) => {
          return <li key={index}>{char}</li>;
        })}
      </LiContainer>
    </>
  );
};

export default Word;
