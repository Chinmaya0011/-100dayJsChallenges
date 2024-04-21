// Define the question
 question = "Find the factorial of a number using recursion.";

// Define the number
let num = 10;

// Define the function to find the factorial
function findFact(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * findFact(num - 1);
    }
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the number
let num = 10;

// Define the function to find the factorial
function findFact(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * findFact(num - 1);
    }
}

// Output the factorial of the number
console.log(findFact(num));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = findFact(num);
    document.getElementById('output').innerHTML = `The factorial of ${num} is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(findFact(num));
}
