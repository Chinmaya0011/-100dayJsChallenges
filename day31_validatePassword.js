let pass='!2dbVbgc';

function validatePass(pass){
  if(pass.length>=8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass)&&/[0-9]/.test(pass)){
    return true;
  }
  
    return false;
  
}
console.log(validatePass(pass))