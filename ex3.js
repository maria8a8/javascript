
let i, number;
number = prompt("Enter a number:");
number = Number(number);

for (let i = 1; i <= number; i++) {
  console.log("loop " + i);
}

if (number > 50) {
  console.log("good");
} else {
  console.log("bad");
}