// Define the question
 question = "Find the maximum number in an array.";

// Define the array
let arr = [1, 23, 42, 5865, 324, 745, 123];

// Define the function to find the maximum number
function findMaxNumber(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [1, 23, 42, 5865, 324, 745, 123];

// Define the function to find the maximum number
function findMaxNumber(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

// Add an event listener to a button
document.getElementById('btn').addEventListener('click', function() {
    // Find and display the maximum number when the button is clicked
    let maxNumber = findMaxNumber(arr);
    document.getElementById('output').innerHTML = "The maximum number is: " + maxNumber;
});
`;

// Display the question and execute the function to find the maximum number if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question;
    document.getElementById('output').innerHTML = findMaxNumber(arr); // Execute the function directly
} else {
    console.log(findMaxNumber(arr)); // Log the result when not running in a browser
}
