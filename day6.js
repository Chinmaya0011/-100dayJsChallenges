// let str='baaasb';

// const isPalindrome=(str)=>{
//     const str1=str.toLowerCase();
//    const str2=[];
//    for(let i=str1.length;i>=0;i--){
//     str2.push(str1[i]);
//    }
//   if(str1===str2.join('')){
// return true
//   }
//   else {return false}
// }
// console.log(isPalindrome(str))
// console.log(str.split('').reverse().join(''))

let str='chinmaya';
 function countWord(str){
    let count=[];
    for(let i=0;i<str.length;i++){
       let char=str[i];
       if(count[char]){
        count[char]++;
       }
       else{
        count[char]=1;
       }
    }
    return count;
 }
 console.log(countWord(str));