// Define the question
 question = "Calculate the sum of squares of elements in an array.";

// Define the array
let arr = [1, 2, 3, 4, 5, 6, 7];

// Define the function to calculate the sum of squares
function sumOfSquare(arr) {
    // Alternative method using reduce
    return arr.reduce((sum, currElm) => sum += (currElm * currElm), 0);
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [1, 2, 3, 4, 5, 6, 7];

// Define the function to calculate the sum of squares
function sumOfSquare(arr) {
    // Alternative method using reduce
    return arr.reduce((sum, currElm) => sum += (currElm * currElm), 0);
}

// Output the sum of squares of elements in the array
console.log(sumOfSquare(arr));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = sumOfSquare(arr);
    document.getElementById('output').innerHTML = `The sum of squares of elements in the array is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(sumOfSquare(arr));
}
