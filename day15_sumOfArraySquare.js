let arr=[1,2,3];

function sumOfSquare(arr){
    
//    let sum=0;
// for(let i=0;i<arr.length;i++){
   
//     sum+=(arr[i]*arr[i])

// }
// console.log(sum);  
return arr.reduce((sum,currElm)=>sum+=(currElm*currElm))

}
console.log(sumOfSquare(arr))

