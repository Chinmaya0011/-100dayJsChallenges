let num=12345;

function sumOfDigit(num){
   let num1=num.toString();
   let sum=0;
   for(let i=0;i<num1.length;i++){
    let num2=Number(num1[i])
    sum+=num2
   }
   return sum
}
console.log(sumOfDigit(num))