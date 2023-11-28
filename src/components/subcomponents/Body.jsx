import { useContext, useEffect } from "react";
import { wordContext } from "../Context/Context";
import styled from "styled-components";

const Corpse = styled.img`
  width: 30%;

  @media screen and (max-width: 912px){
    width: 50vw;
  }

  @media screen and (max-width: 412px){
    width: 58vw;
  }
`;

const Body = () => {
  const { correctChar, isWin } = useContext(wordContext);

  if(correctChar === 0) {
    return <h1>PERDISTE!!</h1>
  } else if(isWin) {
    return <h1>GANASTE!</h1>
  }

  return <>
    <Corpse src={`./${correctChar}.png`}/>
  </>;
};

export default Body;
