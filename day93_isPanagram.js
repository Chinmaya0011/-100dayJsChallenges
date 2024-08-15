
function isPangram(string){
   let alpha='abcdefghijklmnopqrstuvwxyz';
   let str1=string.toLowerCase();
   let result=true;
   for(let i=0;i<alpha.length;i++){
    if (!str1.includes(alpha[i])) {
        result = false;
        break;
      }
   }
   return result;
  }
  console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))