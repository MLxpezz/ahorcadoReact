import { createContext, useState, useEffect } from "react";
import {randomWord} from '../../js/requests';

export const wordContext = createContext("");

const Context = ({ children }) => {
  const words = ["probando la comida", "parangaricutirimicuaro", "ferrocarril", "estoico", "ana lava la tina", "sin querer queriendo"];

  const [word, setWord] = useState('');
  const [letter, setLetter] = useState("");
  const [correctChar, setCorrectChar] = useState(6);
  const [isWin, setIsWin] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function quitarAcentos(palabraConAcentos) {
    return palabraConAcentos.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
  }

  const newWord = async () => {
    //let newWord = words[Math.floor(Math.random() * words.length)];
    const randomlyWord = await randomWord();
    console.log(randomlyWord[0]);
    setWord(quitarAcentos(randomlyWord[0]));
    setIsWin(false);
    setButtonDisabled(false);
    setCorrectChar(6);
  }

  useEffect(() => {
    newWord();
  }, []);

  return (
    <wordContext.Provider
      value={{ word, setWord, correctChar, setCorrectChar, letter, setLetter, newWord, isWin, setIsWin, buttonDisabled, setButtonDisabled }}
    >
      {children}
    </wordContext.Provider>
  );
};

export default Context;
