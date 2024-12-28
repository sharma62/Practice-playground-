// Define the custom error classes
const resultElement = document.getElementById("result")

class OutOfRangeError extends Error {
    constructor(arg) {
        super(`Expression should only consist of integers and +-/* characters and not <${arg}>`);
        this.name = "OutOfRangeError";
    }
}

class InvalidExprError extends Error {
    constructor() {
        super("Expression should not have an invalid combination of expression");
        this.name = "InvalidExprError";
    }
}

// Function to evaluate the string
function evalString(expression) {
    try {

        // Remove all spaces from the expression : Yeh line ensure karti hai ki tumhare mathematical expression mein koi spaces na ho, taki validation aur evaluation asaan ho.
        let exp = document.getElementById("input1").value

        const expr = exp.replace(/\s+/g, "");

        // Check for invalid characters
        if (/[^0-9+\-*/]/.test(expr)) {
            const invalidChar = expr.match(/[^0-9+\-*/]/)[0];
            throw new OutOfRangeError(invalidChar);
        }

        // Check for invalid combination of operators
        if (/([+\-*/]{2,})/.test(expr)) {
            throw new InvalidExprError();
        }

        // Check if expression starts with invalid operator
        if (/^[+/*]/.test(expr)) {
            throw new SyntaxError("Expression should not start with invalid operator");
        }

        // Check if expression ends with an operator
        if (/[+\-*/]$/.test(expr)) {
            throw new SyntaxError("Expression should not end with invalid operator");
        }

        // If all checks pass, evaluate the expression
        return eval(expr);
    } catch (e) {
        if (e instanceof OutOfRangeError) {
            resultElement.textContent = `:  * OutOfRangeError  ${e.name} ${e.message}`
        } else if (e instanceof InvalidExprError) {
            resultElement.textContent = `:  * InvalidExprError  ${e.name} ${e.message}`
        } else if (e instanceof SyntaxError) {
            resultElement.textContent = `:  * SyntaxError  ${e.name} ${e.message}`
        } else {
            resultElement.textContent = `:  * UnknownError  ${e.name} ${e.message}`
        }   
    }
}

function submit() {
    try {

        const inputField = document.getElementById("input1")
        if (!(inputField.value)) {
            throw new Error("Empty input field ");
        }
        let process = evalString()
        resultElement.textContent = `: ${process}`
        // setTimeout(() => {
        //     inputField.value = ""
        //     resultElement.textContent = ""
        // }, 60 * 1000)

    } catch (e) {
        resultElement.textContent = `:  * ${e.name} ${e.message}`
    }
}

