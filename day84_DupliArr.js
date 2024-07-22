
// function dupliArr(arr){

// // let obj={};
// // for(let i=0;i<arr.length;i++){
// //     if(obj[arr[i]]){
// //         obj[arr[i]]++
// //     }
// //     else{
// //         obj[arr[i]]=1;
// //     }
// // }
// // return obj;





// }

// console.log(dupliArr([1,2,1,3,5,2]))
function findDuplicates(arr) {
    let counts = {};
    let duplicates = [];
    for (let item of arr) {
        if (counts[item]) {
            counts[item]++;
        } else {
            counts[item] = 1;
        }
    }
    for (let key in counts) {
        if (counts[key] > 1) {
            duplicates.push(Number(key));
        }
    }
    return duplicates;
}

let array = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findDuplicates(array)); // Output: [1, 2, 3]
