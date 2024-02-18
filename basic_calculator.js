function calculate(num1, operation, num2) {
    /*if (operation == "+") {
        return num1 + num2;
    } else if (operation == "-") {
        return num1 - num2;
    } else if (operation == "*") {
        return num1 * num2;
    } else if (operation == "/") {
        return num2 !== 0 ? num1 / num2 : null;
    } else {
        return null;
    }*/

    switch (operation) {
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num2 !== 0 ? num1 / num2 : null;
            break;

        default:
            return null;
    }
}

console.log(calculate(4, "/", 0));
