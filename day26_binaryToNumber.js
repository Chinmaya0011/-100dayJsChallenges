let binary=10101010;

function toNumber(binary){
    let str=binary.toString();
    let sum=0;
    for(let i=0;i<str.length;i++){
        sum+=str[i]*2**(str.length-1-i);
    }
    return sum;
}

console.log(toNumber(binary))