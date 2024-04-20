// Define the question
let question = "Find the median of a sorted array.";

// Define the sorted array
let arr1 = [12, 23, 1, 3, 1355, 4];
let arr = arr1.sort((a, b) => a - b);

// Define the function to find the median
function findMedian(arr) {
    let firstMedian, secondMedian;
    let length = arr.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        // If the array length is even, median is the average of the two middle elements
        firstMedian = arr[mid];
        secondMedian = arr[mid - 1];
        return (firstMedian + secondMedian) / 2;
    } else {
        // If the array length is odd, median is the middle element
        return arr[mid];
    }
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the sorted array
let arr1 = [12, 23, 1, 3, 1355, 4];
let arr = arr1.sort((a, b) => a - b);

// Define the function to find the median
function findMedian(arr) {
    let firstMedian, secondMedian;
    let length = arr.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        // If the array length is even, median is the average of the two middle elements
        firstMedian = arr[mid];
        secondMedian = arr[mid - 1];
        return (firstMedian + secondMedian) / 2;
    } else {
        // If the array length is odd, median is the middle element
        return arr[mid];
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
