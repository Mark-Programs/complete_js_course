"use strict";
/*
gymnastic teams: dolphins   &   koalas
test scores 1:  44, 23, 71      65, 54, 49
test scores 2:  85, 54, 41      23, 34, 27

Rules: team ONLY wins if it has double the avg score

1. Create arrow function "calcAverage"
2. Create function "checkWinner (avgDolphins, avgKoalas)
    a. logs winner to console: "<name> win (## to ##)"
3. Use "checkWinner" to determine the winner for both test scores
4. Ignore draws

*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(teamA, teamB) {
  const avgA = calcAverage(...teamA);
  const avgB = calcAverage(...teamB);
  let nameA, aScore1, aScore2;
  Object.entries(teamA).forEach(([key, value]) => {
    nameA = value[0];
    aScore1 = value[1];
    aScore2 = value[2];
  });
  console.log(nameA, aScore1, aScore2);
}

const dolphins1 = [44, 23, 71];
const dolphins2 = [85, 54, 41];
const koalas1 = [65, 54, 49];
const koalas2 = [23, 34, 27];
const dolphins3 = {
  name: "Dolphins",
  round1: [44, 23, 71],
  round2: [85, 54, 41],
};
const koalas3 = {};

// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(dolphins1, koalas1);

// how to get key, values form a dict with an arrow function
// Object.entries(dolphins3).forEach(([key, value]) => console.log(value));
