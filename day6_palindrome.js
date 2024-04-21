// Question
 question = "Write a function to check if a string is a palindrome.";

// Define the function
function isPalindrome(str) {
    const str1 = str.toLowerCase();
    const str2 = [];
    for (let i = str1.length - 1; i >= 0; i--) {
        str2.push(str1[i]);
    }
    if (str1 === str2.join('')) {
        return true;
    } else {
        return false;
    }
}

// Sample string
let str = 'baaasb';

// Save the code of the question to the selectedFileCode variable
selectedFileCode = `
// Question
let question = "${question}";

// Define the function
function isPalindrome(str) {
    const str1 = str.toLowerCase();
    const str2 = [];
    for (let i = str1.length - 1; i >= 0; i--) {
        str2.push(str1[i]);
    }
    if (str1 === str2.join('')) {
        return true;
    } else {
        return false;
    }
}

// Sample string
let str = 'baaasb';

// Check if the string is a palindrome
console.log(isPalindrome(str));
`;

// Display the question and answer if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question;
    document.getElementById('output').innerHTML = isPalindrome(str);
} else {
    console.log(isPalindrome(str));
}








// // Question
// let question = "Write a function to count the occurrences of each character in a string.";

// // Define the function
// function countWord(str) {
//     let count = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (count[char]) {
//             count[char]++;
//         } else {
//             count[char] = 1;
//         }
//     }
//     return count;
// }

// // Sample string
// let str = 'chinmaya';

// // Save the code of the question to the selectedFileCode variable
// selectedFileCode = `
// let question = "${question}";

// ${countWord.toString()}

// let str = 'chinmaya';

// console.log(countWord(str));
// `;

// // Display the question and answer if running in a browser
// if (typeof document !== 'undefined') {
//     document.getElementById('question').innerHTML = question;
//     document.getElementById('output').innerHTML = JSON.stringify(countWord(str));
// } else {
//     console.log(countWord(str));
// }
