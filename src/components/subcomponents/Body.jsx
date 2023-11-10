import { useContext, useEffect } from "react";
import { wordContext } from "../Context/Context";
import styled from "styled-components";
import pista from '../../assets/pista.png'

const Corpse = styled.img`
  width: 30%;
`;

const Body = () => {
  const { correctChar } = useContext(wordContext);

  let body = "cuerpo";

  useEffect(() => {
    if (correctChar === 0) {
      alert("Perdistee!!!");
    }
  }, [correctChar]);

  return <>
    <Corpse src={pista}/>
  </>;
};

export default Body;
