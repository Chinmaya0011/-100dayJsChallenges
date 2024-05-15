let str="chin13dsj45";

function exactNumber(str){
   let number=[];
   for(let i=0;i<str.length;i++){
      if(/[a-z]/.test(str[i])){
number.push(str[i])
      }
   }
   return number.join("*");
}
console.log(exactNumber(str))