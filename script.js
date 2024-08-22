// var selectedFileCode; // Variable to store selected file code

// // Function to load and execute selected JavaScript file
// function loadSelectedFile() {
//     var selectElement = document.getElementById("jsFiles");
//     var selectedValue = selectElement.value;
//     var answerDiv = document.querySelector(".answer");

//     if (selectedValue) {
//         answerDiv.style.display = "block"; // Show the answer section
//         var scriptElement = document.createElement("script");
//         scriptElement.src = selectedValue;

//         // Clear previous output and code
//         var outputElement = document.getElementById("output");
//         outputElement.innerHTML = "";
//         document.getElementById("code").innerText = "";

//         // Append script to the body to execute it
//         document.body.appendChild(scriptElement);
//     } else {
//         // Hide the answer section if no file selected
//         answerDiv.style.display = "none";
//         // Clear output if no file selected
//         var outputElement = document.getElementById("output");
//         outputElement.innerHTML = "";
//     }
// }

// // Function to display the code of the selected file
// function showAnswer() {
//     var codeElement = document.getElementById("code");
//     var copyButton = document.querySelector(".copyButton"); // Select the Copy Code button
//     codeElement.innerText = selectedFileCode;
//     codeElement.style.display = "block";
//     copyButton.style.display = "block"; // Show the Copy Code button
// }

// // Function to copy the code displayed in the pre element
// function copyCode() {
//     var codeElement = document.getElementById("code");
//     var codeText = codeElement.innerText;

//     // Create a textarea element to hold the code text
//     var textarea = document.createElement("textarea");
//     textarea.value = codeText;
//     document.body.appendChild(textarea);

//     // Select and copy the code text from the textarea
//     textarea.select();
//     document.execCommand("copy");

//     // Remove the textarea from the DOM
//     document.body.removeChild(textarea);

//     // Update button text to "Copied" temporarily
//     var copyButton = document.querySelector(".copyButton");
//     copyButton.innerText = "Copied";

//     // Restore button text after 2.5 seconds
//     setTimeout(function() {
//         copyButton.innerText = "Copy Code";
//     }, 2500);
// }

// function runCode() {
//     var code = document.getElementById("codeInput").value;

//     try {
//         // Intercept console.log messages
//         var consoleOutput = [];
//         var originalLog = console.log;
//         console.log = function(message) {
//             consoleOutput.push(message);
//             originalLog.apply(console, arguments);
//         };

//         // Execute the code
//         eval(code);

//         // Display the result in the output area
//         var outputElement = document.getElementById("outputText");
//         outputElement.textContent = "Result:\n" + consoleOutput.join('\n');
//     } catch (error) {
//         // Display any errors that occur
//         document.getElementById("outputText").textContent = "Error: " + error;
//     }
// }

// function clearOutput() {
//     document.getElementById("outputText").textContent = ""; // Clears the content of the output area
// }

// let color = "reda";

// switch (color) {
//   case "red":
//     console.log("Red color");
//   case "blue":
//     console.log("Blue color");
//   case "green":
//     console.log("Green color");
//   default:
//     console.log("Unknown color");
// }

// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("Data fetched!");
//       callback(); // Asynchronous callback
//     }, 2000);
//   }
  
//   function displayData() {
//     console.log("Displaying data...");
//   }
  
//   fetchData(displayData);
  

// function chinu(str){
//     console.log(str)
// }

// function chinmaya(callback){
//     callback("Bala")
// }
// chinmaya(chinu)

let student={
    name:"Chinmaya",
    rollNo:123203,
    class:"VII"
}
for(let i in student){
    console.log(student[i])
}