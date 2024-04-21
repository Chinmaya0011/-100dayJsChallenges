// Define the question
 question = "Find the sum of digits of a number.";

// Define the number
let num = 12345;

// Define the function to find the sum of digits
function sumOfDigit(num) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        sum += digit;
    }
    return sum;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the number
let num = 12345;

// Define the function to find the sum of digits
function sumOfDigit(num) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        sum += digit;
    }
    return sum;
}

// Output the sum of digits of the number
console.log(sumOfDigit(num));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let sum = sumOfDigit(num);
    document.getElementById('output').innerHTML = `The sum of digits of ${num} is: ${sum}`;
} else {
    // Log the result if not running in a browser
    console.log(sumOfDigit(num));
}
