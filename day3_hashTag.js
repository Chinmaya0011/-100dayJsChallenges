// Question 3
let question = "Write a function to convert a string to a hashtag format.";

// Define the function
let getHashTag = function(str) {
    let words = str.split(' ');
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return '#' + capitalizedWords.join('');
};

// Save the code of Question 3 to the selectedFileCode variable
selectedFileCode = `
let question = "${question}";

${getHashTag.toString()}

// Call the function with sample input
getHashTag('chinmaya kumar mishra');`;

console.log(getHashTag("chinmaya kumar mishra")); // This should display the result in the console

// Display the question and answer of Question 3 if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question;
    document.getElementById('output').innerHTML = getHashTag('chinmaya kumar mishra');
}
