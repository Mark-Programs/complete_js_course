const age = 32;

age >= 18 ? console.log("You are an adult") : console.log("You are a minor");

// ternary (3 parts)
// condition ? if_code : else_code;

// can also be used to assign a value to a variable True/False, 1/2, this/that, etc

function isAdult(age) {
  result = age >= 18 ? "adult" : "minor";
  return result;
}
console.log(isAdult(age));

// Alt Code:
let ageRange;
let age2 = 12;
if (age2 >= 18) ageRange = "adult";
else ageRange = "minor";
console.log(ageRange);

// conditional inside a template literal

console.log(`I like to drink ${age >= 18 ? "whiskey" : "water"}`);
