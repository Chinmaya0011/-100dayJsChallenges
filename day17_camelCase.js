// Define the question
let question = "Convert a string to camelCase.";

// Define the string
let str = 'chinmaya kumar mishra';

// Define the function to convert to camelCase
function camelCase(str) {
    let words = str.split(' ');
    let camelCaseWords = [words[0]];
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        camelCaseWords.push(words[i]);
    }
    return camelCaseWords.join('');
}

// Save the code to a variable
selectedFileCode = `
// Define the question
let question = "${question}";

// Define the string
let str = 'chinmaya kumar mishra';

// Define the function to convert to camelCase
function camelCase(str) {
    let words = str.split(' ');
    let camelCaseWords = [words[0]];
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        camelCaseWords.push(words[i]);
    }
    return camelCaseWords.join('');
}

// Output the string in camelCase
console.log(camelCase(str));
`;

// Display the question and execute the function if running in a browser
if (typeof document !== 'undefined') {
    // Display the question
    document.getElementById('question').innerHTML = question;

    // Execute the function
    let result = camelCase(str);
    document.getElementById('output').innerHTML = `The string in camelCase is: ${result}`;
} else {
    // Log the result if not running in a browser
    console.log(camelCase(str));
}


//snakeCase;

// let str='chinmaya kuMar MiShra';

// function snakCase(str){
// let str1=str.toLowerCase().split(' ');
// let snakeCase=[];
// for(let i=0;i<str1.length;i++){
//     snakeCase.push(str1[i]);
// }
// return snakeCase.join('_');
// }
// console.log(snakCase(str))







