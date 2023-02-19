import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Answer8.module.css";

const Answer8 = (props) => {
  const Computing = () => {
    var p = document.getElementById("p").value;
    var i = document.getElementById("i").value;
    var n = document.getElementById("n").value;
    var result =
      (p * (i / 1200) * (1 + i / 1200) ** n) / ((1 + i / 1200) ** n - 1);

    document.getElementById("result").value = result.toFixed(2) + " تومان";
  };

  return (
    <Card className={styles["container"]}>
      <h1>محاسبه انلاین اقساط وام بانکی</h1>
      <form name="form">
        <label>مبلغ وام ( تومان )</label>
        <br />
        <input id="p" type="text" placeholder="مثال: 20,000,000" autoFocus />
        <label>( % ) درصد سود سالیانه</label>
        <br />
        <input id="i" type="text" placeholder="مثال: 18" />
        <label>تعداد اقساط وام</label>
        <br />
        <input id="n" type="text" placeholder="مثال: 48" />
        <Button onClick={Computing} className={styles["button"]}>
          محاسبه
        </Button>
        <br />
        <br />
        <label>مبلغ هر قسط</label>
        <br />
        <input id="result" type="text" placeholder="قسط به تومان" />
      </form>
    </Card>
  );
};
export default Answer8;
