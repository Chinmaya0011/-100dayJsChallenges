
function isPrime(num){
    let result=true;
    for(let i=2;i<num;i++){
        if(num%i===0){
            result=false;
        }
    }
    return result;
}
console.log(isPrime(27777))
