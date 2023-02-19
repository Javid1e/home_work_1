import React from "react";
import Card from "../UI/Card";
import styles from "./Main.module.css";
const Main = (props) => {
  return (
    <Card className={` ${props.className} ${styles["main"]}`}>
      <Card className={` ${props.className} ${styles["question-item"]}`}>
        <div
          className={` ${props.className} ${styles["question-item__description"]}`}
        >
          <h1>{props.item.title}</h1>
          <h2>{props.item.body}</h2>
        </div>
      </Card>
      <Card className={` ${props.className} ${styles["answer"]}`}>
        <div
          className={` ${props.className} ${styles["question-item__description"]}`}
        >
          <h1>پاسخ</h1>
        </div>
        {props.children}
      </Card>
    </Card>
  );
};
export default Main;
