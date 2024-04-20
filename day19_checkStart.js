// Define the question
let question = "Check if a word in a string starts with a given string.";

// Define the strings
let str = 'chinMaya kumar mishra';
let str1 = 'cHinmaya';

// Define the function to check if a word starts with a given string
function startWith(str, str1) {
    let start = false;
    let str2 = str.toLowerCase().split(' ');
    let str3 = str1.toLowerCase();

    for (let i = 0; i < str2.length; i++) {
        if (str2[i].startsWith(str3)) {
            start = true;
            break;
        }
    }
    return start;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the strings
let str = 'chinMaya kumar mishra';
let str1 = 'cHinmaya';

// Define the function to check if a word starts with a given string
function startWith(str, str1) {
    let start = false;
    let str2 = str.toLowerCase().split(' ');
    let str3 = str1.toLowerCase();

    for (let i = 0; i < str2.length; i++) {
        if (str2[i].startsWith(str3)) {
            start = true;
            break;
        }
    }
    return start;
}

// Output whether a word in the string starts with the given string
console.log(startWith(str, str1));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = startWith(str, str1);
    document.getElementById('output').innerHTML = `Does any word in the string start with "${str1}"? ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(startWith(str, str1));
}
