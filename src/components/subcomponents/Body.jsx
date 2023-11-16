import { useContext, useEffect } from "react";
import { wordContext } from "../Context/Context";
import styled from "styled-components";

const Corpse = styled.img`
  width: 30%;
`;

const Body = () => {
  const { correctChar } = useContext(wordContext);

  useEffect(() => {
    if (correctChar === 0) {
      alert("Perdistee!!!");
    }
  }, [correctChar]);

  return <>
    <Corpse src={`/src/assets/${correctChar}.png`}/>
  </>;
};

export default Body;
