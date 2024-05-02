// let startNumber=423;
// let endingNumber=505;

// function printNumber(startNumber,endingNumber){
//     let arr=[];
//     for(let i=startNumber;i<=endingNumber;i++){
//        arr.push(i);
//     }
//     console.log(arr)
// }

// printNumber(startNumber,endingNumber)
// function strCount(str, letter){  
//  let count=0;
//  for(let i=0;i<str.length;i++){
//     if(str[i]===letter){
//         count++
//     }
//  }
//  return count;
//   }

function reverseLetter(str) {
    let str1="";
     for(let i=str.length;i>0;i--){
       if(/a-z/.test(str[i])){
         str1+=str[i]
       }
     }
     return str1;
   }
   console.log(reverseLetter("chinu13xa"))

//   console.log(strCount("chinmaya","p"))