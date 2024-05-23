function findDuplicates(arr){
    let remove=[];
    let duplicate=[]
    for(let i=0;i<arr.length;i++){
     if(!remove.includes(arr[i])){
        remove.push(arr[i])
     }
     else{
        duplicate.push(arr[i])
     }
    }
    console.log(duplicate);
}


findDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])

// function findDuplicates(arr) {
//     const frequency = {};
//     const duplicates = [];

//     for (const num of arr) {
//         if (frequency[num]) {
//             duplicates.push(num);
//         } else {
//             frequency[num] = 1;
//         }
//     }

//     console.log(duplicates);
// }

// findDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 8]);
