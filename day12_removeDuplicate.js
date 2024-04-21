// Define the question
 question = "Remove duplicates from an array.";

// Define the array
let arr = [1, 2, 3, 4, 5, 2, 2];

// Define the function to remove duplicates
function removeDuplicates(arr) {
    let orginal = [];
    for (let i = 0; i < arr.length; i++) {
        let duplicate = false;
        for (let j = 0; j < orginal.length; j++) {
            if (arr[i] === orginal[j]) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            orginal.push(arr[i]);
        }
    }
    return orginal;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the array
let arr = [1, 2, 3, 4, 5, 2, 2];

// Define the function to remove duplicates
function removeDuplicates(arr) {
    let orginal = [];
    for (let i = 0; i < arr.length; i++) {
        let duplicate = false;
        for (let j = 0; j < orginal.length; j++) {
            if (arr[i] === orginal[j]) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            orginal.push(arr[i]);
        }
    }
    return orginal;
}

// Output the array after removing duplicates
console.log(removeDuplicates(arr));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = removeDuplicates(arr);
    document.getElementById('output').innerHTML = `Array after removing duplicates: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(removeDuplicates(arr));
}
