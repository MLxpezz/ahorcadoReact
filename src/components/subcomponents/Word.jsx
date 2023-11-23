import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { wordContext } from "../Context/Context";

const LiContainer = styled.ul`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

const Li = styled.li`
  color: #db2ef2;
  padding: 7px;
  font-size: 20px;
`;

const Word = () => {
  const { word, letter, setIsWin, correctChar } = useContext(wordContext);
  const [updateWord, setUpdateWord] = useState([]);

  useEffect(() => {
    let copyWord = word.split("").map((char) => {
      if (char === " ") {
        return (char = " ");
      }
      return (char = "_");
    });
    setUpdateWord(copyWord);
  }, [word]);

  useEffect(() => {
    let auxArr = [...updateWord];

    word.split("").forEach((c, index) => {
      if (c === letter) {
        auxArr[index] = letter;
      }
    });

    if (word !== "" && word === auxArr.join("")) {
      setIsWin(true);
      alert("ganasteeee!!!");
      setIsWin(true);
    } 

    setUpdateWord(auxArr);
  }, [letter]);

  useEffect(() => {
    if(correctChar === 0) {
      setUpdateWord(word.split(''));
    }
  }, [correctChar]);

  return (
    <>
      <LiContainer>
        {updateWord.map((char, index) => {
          return <Li key={index} $empty={char}>{char}</Li>;
        })}
      </LiContainer>
    </>
  );
};

export default Word;
