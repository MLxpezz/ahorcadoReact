import styled from "styled-components";
import { useContext } from "react";
import { wordContext } from "../Context/Context";

const LiContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 5px;
`

const Word = () => {

    const {word} = useContext(wordContext);

    return (
        <>
            <LiContainer>{word.split('').map((char, index) => {
                return <li key={index}>_</li> 
            })}</LiContainer>
        </>
    );
};

export default Word;