import React from "react";
import Questions from "../Components/QuestionsList/Questions";

const QUESTIONS = [
  {
    id: "q1",
    route: 1,
    title: "فال حافظ",
    body: " تعدادی از اشعار حافظ را در یک آرایه ای از رشته ها ذخیره نمایید. در فرمی که در صفحه HTML درست می کنید یک دکمه جهت گرفتن فال قرار دهید. با زدن این دکمه یک عدد تصادفی تولید کرده و بر حسب آن یکی از عناصر آرایه را انتخاب و در یک کادر مناسب و زیبا چاپ کنید.",
  },
  {
    id: "q2",
    route: 2,
    title: "اعتبار سنجی",
    body: " یک صفحه ایجاد کنید و تاریخ تولد کاربر را دریافت کرده و سن آنرا نمایش دهید. اگر تاریخ تولد کاربر بعد از تاریخ فعلی بود، یک پیغام خطا چاپ کرده و از کاربر بخواهید تاریخ تولد را دوباره وارد کند.",
  },
  {
    id: "q3",
    route: 3,
    title: "تبدیل ارز",
    body: "برنامه بنویسید که یک مقدار ارزی از یک کشور  را به واحد پول باقی کشورها تبدیل کند. مثلا فرم شما می تواند دارای 5 جعبه متن و یک دکمه باشد. ",
  },
  {
    id: "q4",
    route: 4,
    title: "امتحان",
    body: " برنامه ای بنویسید که یک امتحان اینترنتی چهار سوالی را برگزار کند. بانک سوالات شما حداقل باید دارای 15 سوال باشد. ابتدا از کار یک عدد درخواست کنید (با مقدار پیش فرض 5) و بر اساس آن تعداد سوالات را مشخص کنید. سپس؛ به تعداد کافی از سوالات را به صورت تصادفی انتخاب و از کاربر بخواهید که به سوالات جواب دهد. هر سوال دارای سه گزینه است. در پایان نیز نمره کاربر را محاسبه و به همراه جواب درست سوالات نمایش دهید.",
  },
  {
    id: "q5",
    route: 5,
    title: "قیمت خودرو",
    body: "یک صفحه وب ایجاد کنید که قیمت خودرو را بر اساس سال ساخت، قیمت پایه، مهلت بیمه، کارکرد، میزان تصادفات، و رنگ حساب کند. به عنوان مثال سایت همراه مکانیک را ببینید. ",
  },
  {
    id: "q6",
    route: 6,
    title: "اوقات نماز",
    body: "یک صفحه ی وب درست کنید که اوقات نماز شهر انتخابی را در هفته ی آینده نمایش دهد. اگر کاربر روی یک روز کلیک کرد، اوقات تمام نمازهای پنج گانه به همراه ساعات طلوع و غروب آفتاب و نیمه شب شرعی را نمایش دهید. ",
  },
  {
    id: "q7",
    route: 7,
    title: "شبکه ی اجتماعی",
    body: "یک صفحه طراحی کنید که متن یک بلاگ را به همراه اطلاعات نویسنده (شامل عکس، تعداد مطالب، بیوگرافی)، تعداد کامنتها و متن آنها، تعداد لایکها، تاریخ ارسال مطلب و برچسبها را نمایش دهد. کاربر باید بتواند مطلب را نشانه گذاری کند و یا در شبکه های اجتماعی به اشتراک بگذارد. هر مطلب شامل نویسنده، متن و یک تصویر است. ",
  },
  {
    id: "q8",
    route: 8,
    title: "وام بانکی",
    body: "یک صفحه درست کنید که اطلاعات وام مثل تعداد اقساط، مبلغ وام و نرخ سود را بگیرد و مبلغ ماهیانه وام را حساب کند. در صورتی که برنامه بتواند سه معلوم را بگیرد و مجهول باقیمانده را حساب کند نمره ی اضافه دارد.",
  },
];
const Guest = () => {
  return (
    <div>
      <Questions items={QUESTIONS} />
    </div>
  );
};
export default Guest;