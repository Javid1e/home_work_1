import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./QuestionsItem.module.css";
import { useNavigate } from "react-router-dom";
const QuestionsItem = (props) => {
  const navigate = useNavigate();
  return (
    <li>
      <Card className={` ${props.className} ${styles["question-item"]}`}>
        <div
          className={` ${props.className} ${styles["question-item__description"]}`}
        >
          <h1>{props.title}</h1>
          <h2>{props.body}</h2>
          <Button
            onClick={(e) => {
              e.preventDefault();
              const path = `answers/q${props.route}`;
              navigate(path);
            }}
          >
            نمایش پاسخ
          </Button>
        </div>
      </Card>
    </li>
  );
};
export default QuestionsItem;
