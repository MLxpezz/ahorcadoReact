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
  const { correctChar } = useContext(wordContext);

  useEffect(() => {
    if (correctChar === 0) {
      alert("Perdistee!!!");
    }
  }, [correctChar]);

  return <>
    <Corpse src={`public/${correctChar}.png`}/>
  </>;
};

export default Body;
