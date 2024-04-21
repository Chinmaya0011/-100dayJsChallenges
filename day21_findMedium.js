// Define the question
 question = "Find the median of an array.";

// Define the array
let arr = [12, 24, 4, 2, 45623, 23, 456];

// Define the function to find the median
function findMedian(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let length = arr.length;
    if (length % 2 === 0) {
        // If the array length is even, return the average of the two middle elements
        let midIndex1 = length / 2 - 1;
        let midIndex2 = length / 2;
        return (arr[midIndex1] + arr[midIndex2]) / 2;
    } else {
        // If the array length is odd, return the middle element
        let midIndex = Math.floor(length / 2);
        return arr[midIndex];
    }
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [12, 24, 4, 2, 45623, 23, 456];

// Define the function to find the median
function findMedian(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let length = arr.length;
    if (length % 2 === 0) {
        // If the array length is even, return the average of the two middle elements
        let midIndex1 = length / 2 - 1;
        let midIndex2 = length / 2;
        return (arr[midIndex1] + arr[midIndex2]) / 2;
    } else {
        // If the array length is odd, return the middle element
        let midIndex = Math.floor(length / 2);
        return arr[midIndex];
    }
}

// Output the median of the array
console.log(findMedian(arr));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = findMedian(arr);
    document.getElementById('output').innerHTML = `The median of the array is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(findMedian(arr));
}
