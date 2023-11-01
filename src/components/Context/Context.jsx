import { createContext, useState, useEffect } from "react";

export const wordContext = createContext("");

const Context = ({ children }) => {
  const words = ["probando", "comida", "programacion", "codigo"];

  const [word, setWord] = useState("");

  useEffect(() => {
    let newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    console.log(word);
  }, []);

  return (
    <wordContext.Provider value={{ word, setWord }}>
      {children}
    </wordContext.Provider>
  );
};

export default Context;
