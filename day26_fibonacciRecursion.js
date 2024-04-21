// Define the question
question = "Calculate the Fibonacci sequence for a given number using recursion.";

// Define the function to calculate the Fibonacci sequence
function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// Define the number
let num = 5;

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the function to calculate the Fibonacci sequence
function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// Output the result
console.log(fibonacci(${num}));
`;

// Execute the function
console.log(fibonacci(num));

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = fibonacci(num);
    document.getElementById('output').innerHTML = `The Fibonacci sequence for ${num} is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(fibonacci(num));
}
