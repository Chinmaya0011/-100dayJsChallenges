
function build(str){

let rsult=[]
for(let i=0;i<str.length;i+=2){
   let cur=str[i];
   for(let j=0;j<str[i+1];j++){
    rsult.push(cur)
   }
}
return rsult.join(''); 
}

console.log(build("a1b2c3d4e5"))