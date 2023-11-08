import { createContext, useState, useEffect } from "react";

export const wordContext = createContext("");

const Context = ({ children }) => {
  const words = ["probando la comida", "parangaricutirimicuaro", "ferrocarril", "estoico", "ana lava la tina", "sin querer queriendo"];

  const [word, setWord] = useState('');
  const [letter, setLetter] = useState("");
  const [correctChar, setCorrectChar] = useState(6);

  useEffect(() => {
    let newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    console.log(word);
  }, []);

  return (
    <wordContext.Provider
      value={{ word, setWord, correctChar, setCorrectChar, letter, setLetter }}
    >
      {children}
    </wordContext.Provider>
  );
};

export default Context;
