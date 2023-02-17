import React from "react";
import styles from "./Questions.module.css";
import Card from "../UI/Card";
import QuestionsList from "./QuestionsList";
const Questions = (props) => {
  return (
    <div>
      <Card className={` ${props.className} ${styles.questions}`}>
        <QuestionsList items={props.items}></QuestionsList>
      </Card>
    </div>
  );
};
export default Questions;
