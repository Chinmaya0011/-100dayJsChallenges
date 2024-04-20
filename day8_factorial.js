// Define the question
let question = "Find the factorial of a given number.";

// Define the number for which factorial needs to be found
let num = 5;

// Define the function to find the factorial
function findFactorial(num) {
    let fact = 1;
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
    } else {
        fact = 1;
    }
    return fact;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the number for which factorial needs to be found
let num = 5;

// Define the function to find the factorial
function findFactorial(num) {
    let fact = 1;
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
    } else {
        fact = 1;
    }
    return fact;
}

// Output the factorial of the given number
console.log(findFactorial(num));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let factorial = findFactorial(num);
    document.getElementById('output').innerHTML = `The factorial of ${num} is: ${factorial}`;
} else {
    // Log the result if not running in a browser
    console.log(findFactorial(num));
}
