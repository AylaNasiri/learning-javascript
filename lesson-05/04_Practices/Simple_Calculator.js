function calculate(a, b, operator) {


    if (operator === "+") {

        return a + b;

    } else if (operator === "-") {

        return a - b;

    } else if (operator === "*") {

        return a * b;

    } else if (operator === "/") {

        return a / b;

    } else {

        return "Invalid Operator";

    }

}



let result = calculate(20, 4, "*");

console.log(result);