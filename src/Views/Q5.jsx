import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer5 from "../Components/Answers/Answer5/Answer5";
const Q5 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q5");
  return (
    <>
      <Main item={QUESTION} children={<Answer5 />} />
    </>
  );
};
export default Q5;
