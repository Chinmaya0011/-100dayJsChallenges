// Define the question
 question = "Count the number of vowels in a string.";

// Define the string
let str = 'chinmaya kumar mishra';

// Define the function to count vowels
function countVowel(str) {
    let count = 0;
    let vowelLetters = 'aeiou';
    for (let i = 0; i < vowelLetters.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (vowelLetters[i] === str[j]) {
                count += 1;
            }
        }
    }
    return count;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the string
let str = 'chinmaya kumar mishra';

// Define the function to count vowels
function countVowel(str) {
    let count = 0;
    let vowelLetters = 'aeiou';
    for (let i = 0; i < vowelLetters.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (vowelLetters[i] === str[j]) {
                count += 1;
            }
        }
    }
    return count;
}

// Output the count of vowels in the string
console.log(countVowel(str));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let count = countVowel(str);
    document.getElementById('output').innerHTML = `The number of vowels in the string is: ${count}`;
} else {
    // Log the result if not running in a browser
    console.log(countVowel(str));
}
