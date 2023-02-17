import React from "react";
import styles from "./QuestionsList.module.css";
import QuestinsItem from "./QuestionsItem";
import Card from "../UI/Card";
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
      <Card
        className={` ${props.className} ${styles["questions-list_header"]}`}
      >
        <h1>تمرین اول برنامه نویسی وب</h1>
        <h2>استاد : دکتر بگ محمدی</h2>
        <h3> دانشجو : عبدالله محبی زرین دره </h3>
      </Card>
      {props.items.map((question) => (
        <QuestinsItem
          route={question.route}
          key={question.id}
          title={question.title}
          body={question.body}
        />
      ))}
    </ul>
  );
};
export default QuestionsList;
