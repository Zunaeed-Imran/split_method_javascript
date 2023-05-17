let year = prompt("Enter a Year:");
let month = year.split("");
let days;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  if (month[5] + month[6] == "02") {
    days = 29;
  } else if (month[5] + month[6] == "09" || month[5] + month[6] == "04" || month[5] + month[6] == "06" || month[5] + month[6] == "11") {
    days = 30;
  } else {
    days = 31;
  }
} else {
  if (month[5] + month[6] == "02") {
    days = 28;
  } else if (month[5] + month[6] == "09" || month[5] + month[6] == "04" || month[5] + month[6] == "06" || month[5] + month[6] == "11") {
    days = 30;
  } else {
    days = 31;
  }
}
document.write(days);

