// Define the question
let question = "Find the element with the maximum frequency in an array.";

// Define the array
let arr = [1, 2, 3, 1, 7, 4, 7, 4, 4];

// Count frequencies of each element
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++;
    } else {
        obj[arr[i]] = 1;
    }
}

// Find the element with maximum frequency
let maxFrequency = 0;
let mostFrequentElement;
for (let j in obj) {
    if (obj[j] > maxFrequency) {
        maxFrequency = obj[j];
        mostFrequentElement = j;
    }
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [1, 2, 3, 1, 7, 4, 7, 4, 4];

// Count frequencies of each element
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]]++;
    } else {
        obj[arr[i]] = 1;
    }
}

// Find the element with maximum frequency
let maxFrequency = 0;
let mostFrequentElement;
for (let j in obj) {
    if (obj[j] > maxFrequency) {
        maxFrequency = obj[j];
        mostFrequentElement = j;
    }
}

// Output the element with maximum frequency
console.log(mostFrequentElement);
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the code
    let result = mostFrequentElement;
    document.getElementById('output').innerHTML = `The element with the maximum frequency is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(mostFrequentElement);
}
