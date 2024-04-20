// Define the question
let question = "Find the repeated elements in an array.";

// Define the array
let arr = [1, 1, 2, 3, 4, 2, 4, 3];

// Define the function to find repeated elements
function findRepeat(arr) {
    let count = {};
    let repeatedElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            // If the element has been encountered before, it's repeated
            repeatedElements.push(arr[i]);
        } else {
            count[arr[i]] = 1;
        }
    }
    return repeatedElements;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [1, 1, 2, 3, 4, 2, 4, 3];

// Define the function to find repeated elements
function findRepeat(arr) {
    let count = {};
    let repeatedElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            // If the element has been encountered before, it's repeated
            repeatedElements.push(arr[i]);
        } else {
            count[arr[i]] = 1;
        }
    }
    return repeatedElements;
}

// Output the repeated elements in the array
console.log(findRepeat(arr));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = findRepeat(arr);
    document.getElementById('output').innerHTML = `Repeated elements in the array: ${result.join(', ')}`;
} else {
    // Log the result if not running in a browser
    console.log(findRepeat(arr));
}
