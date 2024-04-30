let arr=[1,2,3,1,3,4,5,6];
let str=["a","b","c","d","a","f"];

function removeDuplicate(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        let duplicate=false;
     for(let j=0;j<arr1.length;j++){
         if(arr[i]==arr1[j]){
           duplicate=true;
           break;
         }
     }
     if(!duplicate){
        arr1.push(arr[i])
     }
    }
    return arr1;
 }
 

 console.log(removeDuplicate(arr))








// function removeDuplicate(arr){
//    let arr1=[];
//    for(let i=0;i<arr.length;i++){
//     if(!arr1.includes(arr[i])){
//         arr1.push(arr[i])
        
//     }
//    }
// return arr1;
// }
