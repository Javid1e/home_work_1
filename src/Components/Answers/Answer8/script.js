const Computing = () => {
  var p = document.getElementById("p").value;
  var i = document.getElementById("i").value;
  var n = document.getElementById("n").value;
  var result =
    (p * (i / 1200) * (1 + i / 1200) ** n) / ((1 + i / 1200) ** n - 1);

  document.getElementById("result").value = result.toFixed(2) + " تومان";
};
