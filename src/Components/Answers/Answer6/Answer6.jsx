import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Answer6.module.css";

const Answer6 = (props) => {
  var day = 0;
  var month = 0;

  const namaz = () => {
    var city = document.getElementById("city").value;
    fetch("https://api.keybit.ir/owghat/?city=" + city)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.getElementById("date").innerHTML =
          data.result.day + "/" + data.result.month + "/1401";
        document.getElementById("azan_sobh").innerHTML = data.result.azan_sobh;
        document.getElementById("tolu_aftab").innerHTML =
          data.result.tolu_aftab;
        document.getElementById("azan_zohr").innerHTML = data.result.azan_zohr;
        document.getElementById("ghorub_aftab").innerHTML =
          data.result.ghorub_aftab;
        document.getElementById("azan_maghreb").innerHTML =
          data.result.azan_maghreb;
        document.getElementById("nimeshab").innerHTML = data.result.nimeshab;
        day = data.result.day;
        month = data.result.month;
      });
  };

  const namazNext = () => {
    day++;
    var city = document.getElementById("city").value;
    fetch(
      "https://api.keybit.ir/owghat/?city=" +
        city +
        "&month=" +
        month +
        "&day=" +
        day
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.getElementById("date").innerHTML =
          data.result.day + "/" + data.result.month + "/1401";
        document.getElementById("azan_sobh").innerHTML = data.result.azan_sobh;
        document.getElementById("tolu_aftab").innerHTML =
          data.result.tolu_aftab;
        document.getElementById("azan_zohr").innerHTML = data.result.azan_zohr;
        document.getElementById("ghorub_aftab").innerHTML =
          data.result.ghorub_aftab;
        document.getElementById("azan_maghreb").innerHTML =
          data.result.azan_maghreb;
        document.getElementById("nimeshab").innerHTML = data.result.nimeshab;
        day = data.result.day;
        month = data.result.month;
      });
  };

  const namazPrev = () => {
    day--;
    var city = document.getElementById("city").value;
    fetch(
      "https://api.keybit.ir/owghat/?city=" +
        city +
        "&month=" +
        month +
        "&day=" +
        day
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.getElementById("date").innerHTML =
          data.result.day + "/" + data.result.month + "/1401";
        document.getElementById("azan_sobh").innerHTML = data.result.azan_sobh;
        document.getElementById("tolu_aftab").innerHTML =
          data.result.tolu_aftab;
        document.getElementById("azan_zohr").innerHTML = data.result.azan_zohr;
        document.getElementById("ghorub_aftab").innerHTML =
          data.result.ghorub_aftab;
        document.getElementById("azan_maghreb").innerHTML =
          data.result.azan_maghreb;
        document.getElementById("nimeshab").innerHTML = data.result.nimeshab;
        day = data.result.day;
        month = data.result.month;
      });
  };

  return (
    <Card className={styles["container"]}>
      <div id="main">
        <div>
          <label>?????? ?????? ???? ???????? ????????:</label>
          <input type="text" id="city" defaultValue="??????????" />
          <br />
          <br />
          <Button onClick={namaz} className={styles["button"]}>
            ?????????? ?????????? ????????
          </Button>
        </div>
        <br />
        <br />
        <div>
          <Button onClick={namazNext} className={styles["button"]}>
            ?????? ????????
          </Button>
          <Button onClick={namazPrev} className={styles["button"]}>
            ?????? ????????
          </Button>
        </div>
        <br />
        <br />
        <div>
          <p>
            ?????????? <span id="date"> </span>
          </p>
          <p>
            ???????? ?????? <span id="azan_sobh"> </span>
          </p>
          <p>
            ???????? ?????????? <span id="tolu_aftab"> </span>
          </p>
          <p>
            ???????? ?????? <span id="azan_zohr"> </span>
          </p>
          <p>
            ???????? ?????????? <span id="ghorub_aftab"> </span>
          </p>
          <p>
            ???????? ???????? <span id="azan_maghreb"> </span>
          </p>
          <p>
            ???????? ???? ???????? <span id="nimeshab"> </span>
          </p>
        </div>
      </div>
    </Card>
  );
};
export default Answer6;
