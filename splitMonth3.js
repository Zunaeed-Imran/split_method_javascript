let yearmon = prompt("Enter Year and month: ");
let day;
let split = yearmon.split(" ");
let year = split[0];
let month = split[1];

if (year % 4 == 0 && year %100 != 0 || year %400 == 0) {
  if (month == "02") {
    day = 29;
  } else {
    day = 28;
  }
} else if (month == "04" || month == "09" || month == "11" || month == "06") {
  day = 30;
} else {
  day = 31;
}

document.write(day);
