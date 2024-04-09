let num=32;
function checkPower(num){
    let power=false;
    for(let i=1;i<100;i++){
        if(num===Math.pow(2,i)){
            power= true;
          break;
        }
    }
    return power;
}
console.log(checkPower(num))
