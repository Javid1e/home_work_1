import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer7 from "../Components/Answers/Answer7/Answer7";
const Q7 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q7");
  return (
    <>
      <Main item={QUESTION} children={<Answer7 />} />
    </>
  );
};
export default Q7;
