let num=10;

function findFact(num){
    if(num===1){
        return 1;
    }
    else{
        return num*findFact(num-1);
    }
}
console.log(findFact(num))