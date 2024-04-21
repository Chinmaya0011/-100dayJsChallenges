// Define the question
 question = "Find the minimum number in an array.";

// Define the array
let arr = [12, 43, 23, 454, 23, 632, 56, 332, 42];

// Define the function to find the minimum number
function findMin(arr) {
    // Alternative method using reduce
    return arr.reduce((min, current) => {
        return (current < min) ? current : min;
    }, arr[0]);
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [12, 43, 23, 454, 23, 632, 56, 332, 42];

// Define the function to find the minimum number
function findMin(arr) {
    // Alternative method using reduce
    return arr.reduce((min, current) => {
        return (current < min) ? current : min;
    }, arr[0]);
}

// Output the minimum number in the array
console.log(findMin(arr));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = findMin(arr);
    document.getElementById('output').innerHTML = `The minimum number in the array is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(findMin(arr));
}
