 question = "Write a function to check if a triangle is equilateral, isosceles, or scalene.";

// Define the function
let checkTriangle = function(a, b, c) {
    let result;
    if (a === b && b === c) {
        result = 'equilateral';
    } else if (a === b || b === c || c === a) {
        result = 'isosceles';
    } else {
        result = 'scalene';
    }

    // Log the result to the console
    console.log(result);

    // Return the result
    return result;
};

// Save the code of this file to the selectedFileCode variable
selectedFileCode = `
let question = "${question}";

${checkTriangle.toString()}

// Call the function with sample inputs
checkTriangle(1, 4, 4);`;

// Display the question and answer if running in a browser
if (typeof document !== 'undefined') {
    document.getElementById('question').innerHTML = question;
    document.getElementById('output').innerHTML = checkTriangle(1, 4, 4);
}
