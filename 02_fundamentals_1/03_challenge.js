/*
Coding Challenge 3

1. two gymnastics teams
    Dolphins
    Koalas
2. Compete over 3 rounds
3. Highest Avg Score wins
4. Calc avg score for each team w/ test data
    a. team a wins, team b wins, or a draw
5. Minimum score of 100 rule (only wins if >= 100)
    a. code for a draw if both teams >= 100
    b. if score < 100, no winner

TEST DATA ===============
Dophins: 96, 108, 89
Koalas : 99, 91, 110
*/

const avgScore = (a, b, c) => (a + b + c) / 3;

// Assign function to round numbers, reducing decimal places to 2
const roundNumber = (numb) => Math.round((numb + Number.EPSILON) * 100) / 100;

const greaterScore = (a, b) => {
  if (a > b)
    return `The ${teamA[0]} outscored the ${teamB[0]}, ${roundNumber(
      a
    )} to ${roundNumber(b)}!`;
  else
    return `The ${teamB[0]} outscored the ${teamA[0]}, ${roundNumber(
      b
    )} to ${roundNumber(a)}!`;
};

const overHundred = (a, b) => {
  if (a >= 100 && b < 100) return `${teamA[0]} win!`;
  else if (b >= 100 && a < 100) return `${teamB[0]} win!`;
  else if (b >= 100 && a >= 100) return "Both teams win!";
  else return "Nobody won this meet.  Minimum score was not met.";
};

const gymWinner = (teamA, teamB) => {
  let a = avgScore(teamA[1], teamA[2], teamA[3]);
  let b = avgScore(teamB[1], teamB[2], teamB[3]);
  console.log(`Who scored the most? \n\t ${greaterScore(a, b)}`);
  //   greaterScore(a, b);
  console.log(
    `If a team needs at least 100pts to win, who won? \n\t ${overHundred(a, b)}`
  );
};

let teamA = ["Dolphins", 96, 108, 89];
let teamB = ["Koalas", 88, 91, 110];

gymWinner(teamA, teamB);
