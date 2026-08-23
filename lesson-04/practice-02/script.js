
let studentName = "Ali";
let score = 82;
let result;

if (score >= 90) {

    result = "Excellent";

} else if (score >= 75) {

    result = "Good";

} else if (score >= 60) {

    result = "Passed";

} else {

    result = "Failed";

}


console.log(studentName + " got " + result);