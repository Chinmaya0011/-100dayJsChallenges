// Define the question
question = "Truncate a given string to a specified number of characters.";

// Define the string
let str = "chinmaya kumar mishra";

// Define the number of characters to truncate the string
let num = 5;

// Define the function to truncate the string
function truncateString(str, num) {
    return str.slice(0, num) + "...";
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the string
let str = "${str}";

// Define the number of characters to truncate the string
let num = ${num};

// Define the function to truncate the string
function truncateString(str, num) {
    return str.slice(0, num) + "...";
}

// Output the result
console.log(truncateString(str, num));
`;

// Execute the function and log the result
console.log(truncateString(str, num));

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = truncateString(str, num);
    document.getElementById('output').innerHTML = `The truncated string for "${str}" to ${num} characters is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(truncateString(str, num));
}
