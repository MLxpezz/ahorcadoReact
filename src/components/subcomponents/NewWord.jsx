import styled from "styled-components";
import { useContext } from "react";
import { wordContext } from "../Context/Context";

const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    background-color: transparent;
    border: 3px solid #db2ef2;
    color: #db2ef2;
    box-shadow: inset 1px 1px 11px 2px #db2ef2;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

const NewWord = () => {

    const {newWord} = useContext(wordContext);

    return (
        <>
            <Button onClick={newWord}>Nueva palabra</Button>
        </>
    )
}

export default NewWord;