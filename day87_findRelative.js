let sWord="mobiale";

function findRelaative(word){
let text="top ten mobile under 10000";
let text1=text.split(" ")
let sWord1=word.toLowerCase();
let result=false
for(let i=0;i<text1.length;i++){
if(text1[i]==sWord1){
    result=true;
    
}

}
return result;
}
console.log(findRelaative(sWord))
