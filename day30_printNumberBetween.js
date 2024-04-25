let a=2;
let b=12;

function printBetween(a,b,arr=[]){
    
    if(a<=b){
        arr.push(a);
        printBetween(a+1,b,arr)
    }
    return arr;
}
console.log(printBetween(a,b))
