// Question
 question = "Write a function to sort an array of numbers in ascending order.";

// Define the function
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Sample array
let arr = [3, 2, 61, 73, 83, 52, 63, 6, 12, 1];
console.log(sortArray(arr));
// Save the code of the question to the selectedFileCode variable
selectedFileCode = `
let question = "${question}";

${sortArray.toString()}

let arr = [3, 2, 61, 73, 83, 52, 63, 6, 12, 1];

console.log(sortArray(arr));
`;

// Display the question and answer if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question;
    document.getElementById('output').innerHTML = sortArray(arr);
}
