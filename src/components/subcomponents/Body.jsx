import { useContext, useEffect } from "react";
import { wordContext } from "../Context/Context";
import styled from "styled-components";

const Corpse = styled.p`

`;

const Body = () => {
  const { correctChar } = useContext(wordContext);

  let body = "cuerpo";

  useEffect(() => {

    if(correctChar === 0) {
      alert("Perdistee!!!")
    }

  }, [correctChar]);

  return <Corpse>{body.split("").slice(0, correctChar).join("-")}</Corpse>;
};

export default Body;
