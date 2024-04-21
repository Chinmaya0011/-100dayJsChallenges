// Define the question
 question = "Reverse a string.";

// Define the string
let str = 'chinmayakumarmishra';

// Define the function to reverse a string
function reverseStr(str) {
    let reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join('');
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the string
let str = 'chinmayakumarmishra';

// Define the function to reverse a string
function reverseStr(str) {
    let reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join('');
}

// Output the reversed string
console.log(reverseStr(str));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = reverseStr(str);
    document.getElementById('output').innerHTML = `Reversed string: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(reverseStr(str));
}
