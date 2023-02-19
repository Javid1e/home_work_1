import React from "react";
import Main from "../Components/Layouts/Main";
import { useOutletContext } from "react-router-dom";
import Answer8 from "../Components/Answers/Answer8/Answer8";
const Q8 = (props) => {
  const [pp] = useOutletContext();
  const QUESTION = pp.find((element) => element.id === "q8");
  return (
    <>
      <Main item={QUESTION} children={<Answer8 />} />
    </>
  );
};
export default Q8;
