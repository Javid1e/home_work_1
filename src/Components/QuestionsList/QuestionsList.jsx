import React from "react";
import styles from "./QuestionsList.module.css";
import QuestinsItem from "./QuestionsItem";
const QuestionsList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2
        className={`~${props.className} ${styles["questions-list__fallback"]}`}
      >
        هیچ سوالی یافت نشد.
      </h2>
    );
  }

  return (
    <ul className={` ${props.className} ${styles["questions-list"]}`}>
      {props.items.map((question) => (
        <QuestinsItem
          key={question.id}
          title={question.title}
          body={question.body}
        />
      ))}
    </ul>
  );
};
export default QuestionsList;
