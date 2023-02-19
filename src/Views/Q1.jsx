import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer1 from "../Components/Answers/Answer1/Answer1";
const Q1 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q1");
  return (
    <>
      <Main item={QUESTION} children={<Answer1 />} />
    </>
  );
};
export default Q1;
