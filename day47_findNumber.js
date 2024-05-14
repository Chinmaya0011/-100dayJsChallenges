let str="chin13dsj45";

function exactNumber(str){
   let number=[];
   for(let i=0;i<str.length;i++){
      if(/[0-9]/.test(str[i])){
number.push(str[i])
      }
   }
   return number;
}
console.log(exactNumber(str))