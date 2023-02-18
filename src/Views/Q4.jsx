import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
const Q4 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q4");
  return (
    <>
      <Main item={QUESTION} />
    </>
  );
};
export default Q4;
