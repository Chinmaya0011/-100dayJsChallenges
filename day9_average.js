// Define the question
 question = "Find the average of numbers in an array.";

// Define the array
let arr = [12, 32, 4, 3, 57];

// Define the function to find the average
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
    // Alternatively, you can use reduce method:
    // let total = arr.reduce((accum, curElem) => accum + curElem, 0);
    // return total / arr.length;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [12, 32, 4, 3, 57];

// Define the function to find the average
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
    // Alternatively, you can use reduce method:
    // let total = arr.reduce((accum, curElem) => accum + curElem, 0);
    // return total / arr.length;
}

// Output the average of the array
console.log(findAverage(arr));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let average = findAverage(arr);
    document.getElementById('output').innerHTML = `The average of the numbers in the array is: ${average}`;
} else {
    // Log the result if not running in a browser
    console.log(findAverage(arr));
}
