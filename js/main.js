function convertDollar() {
  var x = document.getElementById("dollar").value();
  var result = document.getElementById("result");

  var num = Number(x);

  if (x === "") {
    result.innerHTML = "Enter a number, please";
  } else if (num < 0) {
    result.innerHTML = "Enter a positive number greater than 0";
  } else if (num == 0) {
    result.innerHTML = "Enter number rather than 0";
  } else if (num > 0) {
    var converted = num * 50;
    result.innerHTML = num + "$ = " + converted + " L.E";
  } else {
    result.innerHTML = "Not a number, please enter a number";
  }

  return false;
}

