let num="9077835119";

function validPmobile(num){
  let isStart=num[0]==="6"||num[0]==="7"||num[0]==="8"||num[0]==="9"
  if(isStart && num.length===10){
    return true;
  }
  else{
    return false;
  }
}
console.log(validPmobile(num))
