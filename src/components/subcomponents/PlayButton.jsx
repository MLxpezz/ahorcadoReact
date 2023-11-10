import { useContext } from "react";
import { wordContext } from "../Context/Context";

const PlayButton = () => {

    const {randomWord} = useContext(wordContext);

    return (
        <>
            <button onClick={() => {randomWord()}}>Nueva Palabra</button>
        </>
    );
};

export default PlayButton;