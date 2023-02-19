import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer3 from "../Components/Answers/Answer3/Answer3";
const Q3 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q3");
  return (
    <>
      <Main item={QUESTION} children={<Answer3 />} />
    </>
  );
};
export default Q3;
