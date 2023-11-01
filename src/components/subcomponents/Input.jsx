import { useContext, useState } from "react";
import { wordContext } from "../Context/Context";

const Input = () => {

    const [char, setChar] = useState('');
    const {word} = useContext(wordContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        word.split('').forEach(c => {
            if(char === c) {
                console.log(word);
            }
        })

    }

    const handleInput = (e) => {
        setChar(e);
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input onChange={(e) => handleInput(e.target.value)} type="text" placeholder="Aqui va la letra!"/>
        </form>
    );
};

export default Input;