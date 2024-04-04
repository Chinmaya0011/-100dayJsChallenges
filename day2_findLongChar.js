let str='chinmaya kumaededr mishra';

function findLong(str){
// const str1=str.split(' ');
// const longestWord=str1[0]
// for(let i=0;i<str1.length;i++){
// if(str1[i].length>longestWord.length){
// longestWord=str1[i];
// }
// }
// return longestWord;

let str1=str.split(' ');
// let words=str1.sort((a,b)=>b.length-a.length);
// return words[0];
return str1.reduce((acc,word)=>acc.length>word.length?acc:word)

}
console.log(findLong(str))