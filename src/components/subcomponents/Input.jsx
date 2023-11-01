import { useContext, useState } from "react";
import { wordContext } from "../Context/Context";

const Input = () => {

    const [char, setChar] = useState('');
    const {word, setLetter, setCorrectChar, correctChar} = useContext(wordContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(char === '') {
            return;
        }

        let charMiss = false;

        word.split('').forEach(c => {
            if(char === c) {
                setLetter(char);
                charMiss = true;
            } 
        });

        if(charMiss === false) {
            setCorrectChar(life => life - 1);
        }

        console.log(correctChar);

        setChar('');
    }

    const handleInput = (e) => {
        setChar(e);
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input value={char} onChange={(e) => handleInput(e.target.value)} type="text" placeholder="Aqui va la letra!"/>
        </form>
    );
};

export default Input;