// let str='hello world';

// function reverse(str){
//     let str1=str.split(' ');
//     let reverseStr=[]
//     for( let i=str1.length-1;i>=0;i--){
//         reverseStr.push(str1[i])
//     }
//     console.log(reverseStr.join(' '))
// }

// reverse(str)


let arr=[1,23,42,5865,324,745,123];

let maxNum=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>maxNum){
        maxNum=arr[i];
    }
}
console.log(maxNum)