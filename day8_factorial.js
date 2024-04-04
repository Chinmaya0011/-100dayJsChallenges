//find factorial
let num=5;
function findFactorial(num){
let fact=1;
if(num>0){
    for(let i=1;i<=num;i++){
    fact*=i;
    }
}
else{
    fact=1;
}
return fact
}
console.log(findFactorial(num))