let str='chinmaya kumar mishra';

function camelCase(str){
let str1=str.split(' ');
let camelCase=[str1[0]]
for(let i=1;i<str1.length;i++){
    str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
camelCase.push(str1[i]);
}
console.log(camelCase.join(''))
}
camelCase(str)

//snakeCase;

// let str='chinmaya kuMar MiShra';

// function snakCase(str){
// let str1=str.toLowerCase().split(' ');
// let snakeCase=[];
// for(let i=0;i<str1.length;i++){
//     snakeCase.push(str1[i]);
// }
// return snakeCase.join('_');
// }
// console.log(snakCase(str))







