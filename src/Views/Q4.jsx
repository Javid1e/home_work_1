import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer4 from "../Components/Answers/Answer4/Answer4";
const Q4 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q4");
  return (
    <>
      <Main item={QUESTION} children={<Answer4 />} />
    </>
  );
};
export default Q4;
