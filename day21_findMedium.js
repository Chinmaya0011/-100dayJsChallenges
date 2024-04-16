// let arr=[1,2,3,4,5];

// function findMedium(arr){
//     let med=Math.floor(arr.length/2);
//     return arr[med];

// }
// console.log(findMedium(arr))
let arr=[12,24,4,2,45623,23,456];

function findMedium(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    } 
    return sum/arr.length;
}
console.log(findMedium(arr));