import { useContext } from "react";
import { wordContext } from "../Context/Context";

const Body = () => {
  const { correctChar } = useContext(wordContext);

  let body = "cuerpo";

  return <p>{body.split("").slice(0, correctChar).join("-")}</p>;
};

export default Body;
