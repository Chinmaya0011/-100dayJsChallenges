// Question 2
let question2 = "Write a function to find the longest word in a string.";

// Define the function
let findLong = function(str) {
    let str1 = str.split(' ');
    return str1.reduce((acc, word) => acc.length > word.length ? acc : word);
};

// Save the code of Question 2 to the selectedFileCode variable
selectedFileCode = `
let question = "${question2}";

${findLong.toString()}

// Call the function with sample input
findLong('chinmaya kumar mishra');`;

console.log(findLong("chinmaya kumar mishra")); // This should display the result in the console

// Display the question and answer of Question 2 if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question2;
    document.getElementById('output').innerHTML = findLong('chinmaya kumar mishra');
}
