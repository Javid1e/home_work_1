import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Answer3.module.css";
import usd from "./assets/imgs/usd.png";
import gbp from "./assets/imgs/gbp.png";
import cad from "./assets/imgs/cad.png";
import eur from "./assets/imgs/eur.jpeg";
import aud from "./assets/imgs/aud.png";
const Answer3 = (props) => {
  const change = () => {
    var usd = document.getElementById("usd").value;
    var gbp = document.getElementById("gbp").value;
    var cad = document.getElementById("cad").value;
    var eur = document.getElementById("eur").value;
    var aud = document.getElementById("aud").value;

    if (usd != "") {
      document.getElementById("gbp").value = usd * 2.03032;
      document.getElementById("cad").value = usd * 1.01941;
      document.getElementById("eur").value = usd * 2.41544;
      document.getElementById("aud").value = usd * 0.88297;
    } else if (gbp != "") {
      document.getElementById("usd").value = gbp * 0.49246;
      document.getElementById("cad").value = gbp * 0.50221;
      document.getElementById("eur").value = gbp * 0.69714;
      document.getElementById("aud").value = gbp * 0.43497;
    } else if (cad != "") {
      document.getElementById("usd").value = cad * 0.98054;
      document.getElementById("gbp").value = cad * 1.99169;
      document.getElementById("eur").value = cad * 1.38814;
      document.getElementById("aud").value = cad * 0.86613;
    } else if (eur != "") {
      document.getElementById("usd").value = eur * 0.70641;
      document.getElementById("gbp").value = eur * 1.43448;
      document.getElementById("cad").value = eur * 0.72037;
      document.getElementById("aud").value = eur * 0.62382;
    } else if (aud != "") {
      document.getElementById("usd").value = aud * 1.13262;
      document.getElementById("gbp").value = aud * 2.29964;
      document.getElementById("cad").value = aud * 1.15498;
      document.getElementById("eur").value = aud * 1.60329;
    }
  };

  const remove = () => {
    document.getElementById("usd").value = "";
    document.getElementById("gbp").value = "";
    document.getElementById("cad").value = "";
    document.getElementById("eur").value = "";
    document.getElementById("aud").value = "";
  };
  return (
    <Card className={styles["container"]}>
      <h1>تبدیل ارز</h1>
      <form className={styles["container"]}>
        <div className={styles["container"]}>
          <img src={usd} />
          <input id="usd" type="text" placeholder="USD" />
        </div>
        <div className={styles["container"]}>
          <img src={gbp} />
          <input id="gbp" type="text" placeholder="GBP" />
        </div>
        <div className={styles["container"]}>
          <img src={cad} />
          <input id="cad" type="text" placeholder="CAD" />
        </div>
        <div className={styles["container"]}>
          <img src={eur} />
          <input id="eur" type="text" placeholder="EUR" />
        </div>
        <div className={styles["container"]}>
          <img src={aud} />
          <input id="aud" type="text" placeholder="AUD" />
        </div>
        <br />
        <Button onClick={change} className={styles["button"]}>
          تبدیل
        </Button>
        <Button onClick={remove} className={styles["button"]}>
          پاک کردن
        </Button>
      </form>
    </Card>
  );
};
export default Answer3;
