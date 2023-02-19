import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Answer5.module.css";

const Answer5 = (props) => {
  const car = () => {
    var car_brand = document.getElementById("car_brand").value;
    switch (car_brand) {
      case "پراید":
        document.getElementById(
          "car_val"
        ).innerHTML = `<option value="111">111</option>
          <option value="131">131</option>
          <option value="151">151</option>`;
        break;
      case "پژو":
        document.getElementById(
          "car_val"
        ).innerHTML = `<option value="206">206 تیپ دو</option>
            <option value="207">207</option>
            <option value="405">405</option>`;
        break;
      default:
      // code block
    }
  };

  var price = 0;

  const calc = () => {
    var n = parseInt(document.getElementById("car_val").value);
    switch (n) {
      case 111:
        price = 213000000;
        break;
      case 131:
        price = 195000000;
        break;
      case 151:
        price = 178000000;
        break;
      case 206:
        price = 325000000;
        break;
      case 207:
        price = 435000000;
        break;
      case 405:
        price = 364000000;
        break;
    }

    var y = parseInt(document.getElementById("year").value);
    var result = 0;
    switch (y) {
      case 1401:
        result = price * 1;
        break;
      case 1400:
        result = price * 0.95;
        break;
      case 1399:
        result = price * 0.9;
        break;
      case 1398:
        result = price * 0.85;
        break;
      case 1397:
        result = price * 0.8;
        break;
    }

    var b = document.getElementById("badane").value;
    switch (b) {
      case 0:
        result -= price * 0;
        break;
      case 1:
        result -= price * 0.1;
        break;
      case 2:
        result -= price * 0.2;
        break;
      case 3:
        result -= price * 0.15;
        break;
    }

    document.getElementById("result").innerHTML = result;
  };

  return (
    <Card>
      <div id="main">
        <form>
          <div>
            <label>نام خودرو:</label>
            <br />
            <input
              type="search"
              id="car_brand"
              onChange={car}
              placeholder="جستوجوی خودرو"
            />
          </div>
          <br />
          <div>
            <label>نوع خودرو:</label>
            <br />
            <select id="car_val" required></select>
          </div>
          <div>
            <label>سال ساخت:</label>
            <br />
            <select id="year">
              <option value="1401">1401</option>
              <option value="1400">1400</option>
              <option value="1399">1399</option>
              <option value="1398">1398</option>
              <option value="1397">1397</option>
            </select>
          </div>
          <div>
            <label>وضعیت بدنیه:</label>
            <br />
            <select id="badane">
              <option value="0">بی رنگ</option>
              <option value="1">گلگیر</option>
              <option value="2">در</option>
              <option value="3">صندوق</option>
            </select>
          </div>
          <div>
            <Button onClick={calc}>محاسبه قیمت</Button>
          </div>
          <div>
            <p>
              {" "}
              مبلغ خودرو : <span id="result"></span>
            </p>
          </div>
        </form>
      </div>
    </Card>
  );
};
export default Answer5;
