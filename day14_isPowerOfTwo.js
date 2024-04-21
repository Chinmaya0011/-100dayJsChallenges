// Define the question
 question = "Check if a number is a power of 2.";

// Define the number
let num = 32;

// Define the function to check if a number is a power of 2
function checkPower(num) {
    let power = false;
    for (let i = 1; i < 100; i++) {
        if (num === Math.pow(2, i)) {
            power = true;
            break;
        }
    }
    return power;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the number
let num = 32;

// Define the function to check if a number is a power of 2
function checkPower(num) {
    let power = false;
    for (let i = 1; i < 100; i++) {
        if (num === Math.pow(2, i)) {
            power = true;
            break;
        }
    }
    return power;
}

// Output whether the number is a power of 2
console.log(checkPower(num));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = checkPower(num);
    document.getElementById('output').innerHTML = `Is ${num} a power of 2? ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(checkPower(num));
}
