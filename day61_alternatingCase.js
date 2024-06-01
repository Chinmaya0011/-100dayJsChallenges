String.prototype.toAlternatingCase = function () {
let result="";


for(let i=0;i<this.length;i++){
    if(this[i]===this[i].toUpperCase()){
        result+=this[i].toLowerCase();
    }
    else if(this[i]===this[i].toLowerCase()){
        result+=this[i].toUpperCase();
    }
}

return result;

  }

  const str="hello world";
  console.log(str.toAlternatingCase())