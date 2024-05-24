// function findDuplicates(arr){
//     let remove=[];
//     let duplicate=[]
//     for(let i=0;i<arr.length;i++){
//      if(!remove.includes(arr[i])){
//         remove.push(arr[i])
//      }
//      else{
//         duplicate.push(arr[i])
//      }
//     }
//     console.log(duplicate);
// }


// findDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])

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

// function findDuplicates(arr,n){
//    let occr={};
//    let duplicate=[]
//    for(let i=0;i<n;i++){
//       if(occr[arr[i]]){
//          occr[arr[i]]++;
//       }
//       else{
//          occr[arr[i]]=1;
//       }
//    }
//    for(let j in occr){
//      if(occr[j]>1){
//      duplicate.push(parseFloat(j))
//      }
   
//    }
//    if(duplicate.length===0){
//       return -1;
//    }
//    else{
//       return duplicate.join(" ");
//    }
   
//    }
//    console.log(findDuplicates([2, 0 ,3, 3, 1,1],6))

function squareDigits(num){
  let str=num.toString();
  let result=[];
  for(let i=0;i<str.length;i++){
   result.push(str[i]*str[i])
  }
  return parseFloat(result.join(""));
 }
 console.log(squareDigits(8118))