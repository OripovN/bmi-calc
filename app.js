const vazn = +prompt("Vazningizni kiriting:");
const boy = +prompt("Bo`yingizni kiriting:");

const bmi = vazn / boy ** 2;

if (bmi < 18.5) {
  console.log("Underweight");
} else if (18.5 <= bmi && 24.9 >= bmi) {
  console.log("Normal weight");
} else if (25 <= bmi && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obesity");
}
