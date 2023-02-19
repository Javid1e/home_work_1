import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Answer2.module.css";
const Answer2 = (props) => {
  const ageCalculator = () => {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == "") {
      document.getElementById("message").innerHTML =
        "*لطفا تاریخ را وارد کنید*";
      return false;
    } else {
      var month_diff = Date.now() - dob.getTime();
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      var age = year - 1970;
      if (age < 0) {
        document.getElementById("message").innerHTML =
          "*لطفا تاریخ را درست وارد کنید*";
        return false;
      } else {
        document.getElementById("message").innerHTML = "";
        return (document.getElementById("result").innerHTML =
          "سن شما: " + age + " سال ");
      }
    }
  };
  return (
    <Card className={styles["container"]}>
      <h1> تاریخ تولد خود را وارد کنید:</h1>
      <input type="date" id="DOB" />
      <span id="message" className={styles["message"]}>
        {" "}
      </span>

      <Button type="submit" onClick={ageCalculator} lassName={styles["button"]}>
        محاسبه سن
      </Button>
      <h3 id="result"></h3>
    </Card>
  );
};
export default Answer2;
