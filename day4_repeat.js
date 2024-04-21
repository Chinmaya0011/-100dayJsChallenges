// Question
 question = "Write a function to find the number of occurrences of a letter in a string.";

// Define the function
function findRepeat(str, l) {
    let word = str.toLowerCase();
    let letter = l.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}

// Save the code of the question to the selectedFileCode variable
selectedFileCode = `
let question = "${question}";

${findRepeat.toString()}
console.log(findRepeat("chinmaya kumar mishra","c"));
`;
console.log(findRepeat("chinmaya kumar mishra", "k"))
// Display the question and answer if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question;
    document.getElementById('output').innerHTML = findRepeat("chinmaya kumar mishra", "n");
}
