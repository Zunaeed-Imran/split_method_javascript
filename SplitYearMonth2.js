let yearmonth = prompt("Enter a Year:");
let monthe = yearmonth.split("");
let year = monthe[0] + monthe[1] + monthe[2] + monthe[3];
let month = monthe[5] + monthe[6];
let days;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
  if (month == "02") {
    days = 29;
  } else if (month == "09" || month == "04" || month == "06" || month == "11") {
    days = 30;
  } else {
    days = 31;
  }
} else {
  if (month == "02") {
    days = 28;
  } else if (month == "09" || month == "04" || month == "06" || month == "11") {
    days = 30;
  } else {
    days = 31;
  }
}
document.write(days);