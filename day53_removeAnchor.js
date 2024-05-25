function removeUrlAnchor(url){
let result="";
for(let i=0;i<url.length;i++){
    if(url[i]==="#"){
  break;
    }
    result+=url[i]
   
}
 return result;
  }
  console.log(removeUrlAnchor("www.codewars.com#about"))

// // function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
// //     if(enteredCode===correctCode && new Date(currentDate)<=new Date(expirationDate)){
// //         return true;
// //     }
// //     else{
// //         return false;
// //     }
// //   }
// //   console.log(checkCoupon("123", "123", "July 1, 2015", "July 2, 2015"))
// function correctErrors(text) {
//     let correctedText = "";
  
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] === '5') {
//         correctedText += 'S';
//       } else if (text[i] === '0') {
//         correctedText += 'O';
//       } else if (text[i] === '1') {
//         correctedText += 'I';
//       } else {
//         correctedText += text[i];
//       }
//     }
  
//     return correctedText;
//   }
  
//   // Example usage:
//   console.log(correctErrors("H5LLO W0RLD")); // Output: "HELLO WORLD"
  