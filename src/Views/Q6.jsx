import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer6 from "../Components/Answers/Answer6/Answer6";
const Q6 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q6");
  return (
    <>
      <Main item={QUESTION} children={<Answer6 />} />
    </>
  );
};
export default Q6;
