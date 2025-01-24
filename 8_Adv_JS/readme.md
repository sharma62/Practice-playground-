

A - Moving variables to top of scope: Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations. This can lead to variables being undefined if they are accessed before initialization.

Example:

console.log(x);  // undefined, because the declaration is hoisted, but not the initialization
var x = 5;
console.log(x);  // 5

Q.2 Which type of variables are hoisted in JavaScript?
ans- let ,var, const
Explanation:
A - Var, let, and const: All of these types of variables are hoisted, but they behave differently:

var: The declaration of var variables is hoisted to the top of the scope. However, their initialization is not hoisted, meaning they are initialized with undefined if accessed before the assignment.

Example:

console.log(x);  // undefined
var x = 10;
let and const: These are also hoisted, but they are not initialized until the code reaches their declaration. Accessing them before their declaration results in a ReferenceError due to the "temporal dead zone" (TDZ).

Example with let or const:

console.log(x);  // ReferenceError: Cannot access 'x' before initialization
let x = 10;
Why Others Are Incorrect:
B - Only var: While var is hoisted and initialized as undefined, let and const are also hoisted but behave differently due to the temporal dead zone, so they can't be accessed before initialization.

C - Only let and const: While let and const are hoisted, they are not the only variables that undergo hoisting. var also behaves similarly, albeit with different initialization rules.

D - None, variables are not hoisted: This is incorrect. All three (var, let, and const) are hoisted in JavaScript, but they have different behaviors regarding initialization.



Q.3 What happens to a variable declared with var before it's assigned a value
ans - undefine
Explanation:
A - Undefined: When a variable is declared using var but is not assigned a value, it is automatically initialized with the value undefined. This means that the variable exists, but it doesn't hold any specific value until explicitly assigned one.

Example:

var x;
console.log(x);  // undefined
Why Others Are Incorrect:
B - Null: A variable is not automatically assigned null unless explicitly set to null. undefined is the default value for uninitialized variables.

C - Empty string: An uninitialized variable will not be assigned an empty string unless explicitly initialized as such.

D - Automatically assigned a value: The variable is not automatically assigned a specific value like 0 or false. It is initialized with undefined until a value is explicitly assigned.

Q.4 Why is function hoisting useful in JavaScript?
ans- Allows functions to be called before declaration
Correct Answer: A - Allows functions to be called before declaration

Explanation:
A - Allows functions to be called before declaration: Function hoisting is useful because it allows function declarations to be used before they appear in the code. This is due to the fact that the entire function definition (not just the declaration) is hoisted to the top of the scope, making it available for use anywhere in the scope.

Example:

greet();  // Works even before the function is declared

function greet() {
  console.log("Hello!");
}
Why Others Are Incorrect:
B - Prevents functions from being called before declaration: Function hoisting actually enables functions to be called before their declaration, not the opposite.

C - Automatically assigns function parameters: Hoisting has nothing to do with automatically assigning function parameters. Function parameters must still be explicitly provided when the function is called.

D - Enables function overriding: Function hoisting does not enable function overriding. Overriding happens when a function is redefined with the same name later in the code, but that’s unrelated to hoisting.


Q.5 What is the difference between function declaration and function expression in terms of hoisting
ans- Function declarations are hoisted, expressions are not

Explanation:
A - Function declarations are hoisted, expressions are not: In JavaScript, function declarations are hoisted to the top of their scope, meaning both the function name and the function body are available throughout the entire scope. On the other hand, function expressions (where a function is assigned to a variable) are not hoisted in the same way. Only the variable declaration is hoisted, but the function assignment happens only when the code execution reaches that line.

Example of function declaration:

greet();  // Works even before the function is declared

function greet() {
  console.log("Hello!");
}
Example of function expression (hoisting doesn't apply to the function itself):

greet();  // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};
Why Others Are Incorrect:
B - Function expressions are hoisted, declarations are not: This is incorrect. Function declarations are hoisted, while function expressions are not hoisted as functions, only the variable declaration is hoisted.

C - Both are hoisted equally: This is incorrect. Function declarations and expressions are hoisted differently. Function declarations are fully hoisted, whereas function expressions only hoist the variable declaration.

D - Neither is hoisted: This is incorrect. Function declarations are hoisted, while function expressions are partially hoisted (only the variable declaration, not the function itself).