import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
const Q2 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q2");
  return (
    <>
      <Main item={QUESTION} />
    </>
  );
};
export default Q2;
