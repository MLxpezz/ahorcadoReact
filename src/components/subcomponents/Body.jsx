const Body = () => {
  let body = "cuerpo";

  return <p>{body.split("").join("-")}</p>;
};

export default Body;
