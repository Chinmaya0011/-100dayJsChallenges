// function sumOfMinimums(arr) {
// let minvalue=[];
// for(let i=0;i<arr.length;i++){
//   let min=arr[i][0]
//     for(let j=0;j<arr[i].length;j++){
// if(arr[i][j]<min){
//     min=arr[i][j];
// }
//     }
//     minvalue.push(min);
// }
// let sum=0;
// for(let i=0;i<minvalue.length;i++){
//     sum+=minvalue[i];
// }
// return sum;
// }
//   console.log(sumOfMinimums( [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))

// function multipleOfIndex(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % i === 0) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }
  
//   // Test case
//   console.log(multipleOfIndex([0, 2, 3, 6, 9]));

// function minValue(values){
  
// let uniqueSet=new Set(values);
// let fil=[...uniqueSet]
// let sort=fil.sort();
// console.log(parseFloat(sort.join("")))

//   }
//   minValue(([1,3,1]))
// function hexToDec(hexString){
//   return parseInt(hexString,16)
// }
// console.log(hexToDec("FFF"))
// function sortByLength (array) {
// let arrLen=[];
// for(let i=0;i<array.length;i++){
//   arrLen.push(array[i].length)
// }
// let arrLen1=arrLen.sort();
// let result=[];
//   for(let k=0;k<arrLen1.length;k++){
//     for(let j=0;j<array.length;j++){
// if(arrLen1[k]===array[j].length){
//   result.push(array[j])
// }
//   }
// }
// return result;
// }
// console.log(sortByLength(["chinu","bro","h","hieedd","ww"]))

let num=10;
console.log()