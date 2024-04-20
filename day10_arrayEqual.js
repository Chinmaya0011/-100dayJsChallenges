// let str='chinmaya kumar mishra';
// console.log(str)
// function findOccurrences(str){
//     let str1=str.toUpperCase().replaceAll(' ','');
//     const occr=[];
//     for(let i in str1){
// if(occr[str1[i]]){
//     occr[str1[i]]++
// }
// else{
//     occr[str1[i]]=1
// }
//     }
//     return occr;
// }
// console.log(findOccurrences(str))

// Define the question
let question = "Check if two arrays are equal.";

// Define the arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 2];

// Define the function to check equality of arrays
function checkEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 2];

// Define the function to check equality of arrays
function checkEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Output the result of checking equality of arrays
console.log(checkEqual(arr1, arr2));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = checkEqual(arr1, arr2);
    document.getElementById('output').innerHTML = `Are the arrays equal? ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(checkEqual(arr1, arr2));
}
