// Define the question
 question = "Repeat the given string a specified number of times.";

// Define the string
let string = 'chinu';

// Define the function to repeat the string
function repeatString(string, timeOfRepeat) {
    let repeatedString = "";
    for (let i = 0; i <= timeOfRepeat; i++) {
        repeatedString += string;
    }

    return repeatedString;
}

// Define the number of times to repeat the string
let timeOfRepeat = 5;

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the string
let string = '${string}';

// Define the function to repeat the string
function repeatString(string, timeOfRepeat) {
    let repeatedString = "";
    for (let i = 0; i <= timeOfRepeat; i++) {
        repeatedString += string;
    }

    return repeatedString;
}

// Define the number of times to repeat the string
let timeOfRepeat = ${timeOfRepeat};

// Output the result
console.log(repeatString(string, timeOfRepeat));
`;

// Execute the function and log the result
console.log(repeatString(string, timeOfRepeat));

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = repeatString(string, timeOfRepeat);
    document.getElementById('output').innerHTML = `The repeated string for ${string} ${timeOfRepeat} times is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(repeatString(string, timeOfRepeat));
}
