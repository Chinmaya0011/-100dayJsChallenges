function order(words){
    let words1=words.split(" ")
let result=[];
for(let i=1;i<=words1.length;i++){
for(let j=0;j<words1.length;j++){
    if(words1[j].includes(i)){
        result.push(words1[j])
    }
}
}
return result.join(" ");
}
  console.log(order("is2 Thi1s T4est 3a"))
function stringToArray(string){
 
        // code code code
    
    }
    console.log(stringToArray("Robin Singh"))
