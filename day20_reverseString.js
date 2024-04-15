let str='chinmayakumarmishra';

function reverseStr(str){
    let str1=[];
    for(let i=str.length;i>=0;i--){
        str1.push(str[i])
    }
    return str1.join('')
}
console.log(reverseStr(str))