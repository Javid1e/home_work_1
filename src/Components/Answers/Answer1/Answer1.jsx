import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import styles from "./Answer1.module.css";
const FALLS = [
  "<p>رنج ما را که توان برد به یک گوشه چشم<br/>شرط انصاف نباشد که مداوا نکنی</p>",
  "<p>با مدعی مگوئید اسرار عشق و مستی<br/>تا بی‌خبر بمیرد در درد خودپرستی</p>",
  "<p>شب صحبت غنیمت دان که بعد از روزگار ما<br/>بسی گردش کند گردون بسی لیل و نهار آرد</p>",
  "<p>اشک در چشمان من طوفان غم دارد به دل<br/>خنده بر لب می زنم تا کس  نداند  راز دل</p>",
  "<p>آن سفر کرده که صد قافله همره اوست<br/>هر کجا هست خدایا به سلامت دارش</p>",
  "<p>شراب تلخ می‌خواهم که مردافکن بود زورش<br/>که تا یک دم بیاسایم ز دنیا و شر و شورش</p>",
  "<p>ای دل اندر بند زلفش از پریشانی منال<br/>مرغ زیرک چون بدام افتد تحمل بایدش</p>",
  "<p>از غم هجر مکن ناله و فریاد که دوش<br/>زده‌ام فالی و فریادرسی می‌آید</p>",
  "<p>آفرین بر دل نرم تو، که از بهر ثواب<br/>کشته غمزه خود را به نماز آمده‌ای</p>",
  "<p>دل ربایی همه آن نیست که عاشق بکشند<br/>خواجه آنست که باشد غم خدمتکارش</p>",
];
const Answer1 = (props) => {
  function randomFal() {
    var r = Math.floor(Math.random() * 8);
    document.getElementById("p").innerHTML = FALLS[r];
  }
  return (
    <Card className={styles["container"]}>
      <Button onClick={randomFal} className={styles["button"]}>
        <span>فال من را بگیر</span>
      </Button>
      <div id="p" className={styles["fal"]}></div>
    </Card>
  );
};
export default Answer1;
