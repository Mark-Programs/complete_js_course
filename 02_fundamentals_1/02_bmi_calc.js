// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// ^^^^ previous stuff
// now starting at CODING CHALLENGE 2, SECTION 2, #19

/*
Use BMI calculator
print to console, stating who has a higher BMI.
Message to display"
    "<name>'s BMI is higher than <name>'s!"
Use a temple string to include BMI values
*/

// bmi = weight_lb / [height_in * height_in] * 703

// assign function to determine BMI using American Measurements
const BMI = (name, weight, height) => (weight / (height * height)) * 703;

// Assign function to round numbers, reducing decimal places to 2
const roundNumber = (numb) => Math.round((numb + Number.EPSILON) * 100) / 100;

// Main program to determine if person1 or 2 has a higher BMI
// Requires format of [name, weight, height]
const compare = (person1, person2) => {
  let aInit = BMI(...person1);
  let bInit = BMI(...person2);
  let a = roundNumber(aInit);
  let b = roundNumber(bInit);
  if (a > b)
    console.log(
      `${person1[0]}'s BMI of ${a} is higher than ${person2[0]}'s BMI of ${b}!`
    );
  else
    console.log(
      `${person2[0]}'s BMI of ${b} is higher than ${person1[0]}'s BMI of ${a}!`
    );
};

let a = ["Mark", 180, 71];
let b = ["John", 220, 73];

compare(a, b);
