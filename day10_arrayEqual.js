// let str='chinmaya kumar mishra';
// console.log(str)
// function findOccurrences(str){
//     let str1=str.toUpperCase().replaceAll(' ','');
//     const occr=[];
//     for(let i in str1){
// if(occr[str1[i]]){
//     occr[str1[i]]++
// }
// else{
//     occr[str1[i]]=1
// }
//     }
//     return occr;
// }
// console.log(findOccurrences(str))

function checkEqual(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }

    return true;
}
console.log(checkEqual([1,2,3],[1,2,3,2]))