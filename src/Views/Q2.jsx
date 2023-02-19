import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer2 from "../Components/Answers/Answer2/Answer2";
const Q2 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q2");
  return (
    <>
      <Main item={QUESTION} children={<Answer2 />} />
    </>
  );
};
export default Q2;
