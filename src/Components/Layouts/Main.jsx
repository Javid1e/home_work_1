import React from "react";
import Card from "../UI/Card";
import styles from "./Main.module.css";
const Main = (props) => {
  return (
    <Card className={` ${props.className} ${styles["main"]}`}>
      <Card className={` ${props.className} ${styles["question-item"]}`}>
        <div
          className={` ${props.className} ${styles["question-item__description"]}`}
        ></div>
        <h1>{props.item.title}</h1>
        <h2>{props.item.body}</h2>
      </Card>
      <Card></Card>
    </Card>
  );
};
export default Main;
