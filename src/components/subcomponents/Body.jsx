import { useContext, useEffect } from "react";
import { wordContext } from "../Context/Context";

const Body = () => {
  const { correctChar } = useContext(wordContext);

  let body = "cuerpo";

  useEffect(() => {

    if(correctChar === 0) {
      alert("Perdistee!!!")
    }

  }, [correctChar]);

  return <p>{body.split("").slice(0, correctChar).join("-")}</p>;
};

export default Body;
