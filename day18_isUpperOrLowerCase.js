// Define the question
 question = "Check if a character is uppercase or lowercase.";

// Define the character
let char = 'c';

// Define the function to check the case of the character
function check(char) {
    let char1 = char.toUpperCase();
    if (char === char1) {
        return 'uppercase';
    } else {
        return 'lowercase';
    }
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the character
let char = 'c';

// Define the function to check the case of the character
function check(char) {
    let char1 = char.toUpperCase();
    if (char === char1) {
        return 'uppercase';
    } else {
        return 'lowercase';
    }
}

// Output the case of the character
console.log(check(char));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = check(char);
    document.getElementById('output').innerHTML = `The character is ${result}.`;
} else {
    // Log the result if not running in a browser
    console.log(check(char));
}


// let str="saheed laxman nayak medical college & hospital koraput";

// console.log(str.toUpperCase())