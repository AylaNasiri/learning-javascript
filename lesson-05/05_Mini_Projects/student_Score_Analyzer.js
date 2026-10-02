
const scores = [85, 42, 73, 96, 58];

function getGrade(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 70) {
    return "Good";
  } else if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

let total = 0;
let passedStudents = 0;
let failedStudents = 0;

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  const grade = getGrade(score);

  console.log(`Score: ${score} - ${grade}`);

  total += score;

  if (score >= 50) {
    passedStudents++;
  } else {
    failedStudents++;
  }
}

const average = total / scores.length;

console.log("----------------");

console.log(`Average: ${average}`);
console.log(`Passed: ${passedStudents}`);
console.log(`Failed: ${failedStudents}`);