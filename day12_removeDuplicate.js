let arr=[1,2,3,4,5,2,2];

function removeDuplicates(arr){
let orginal=[];
for(let i=0;i<arr.length;i++){
    let duplicate=false;
    for(let j=0;j<orginal.length;j++){
        if(arr[i]===orginal[j]){
            duplicate=true;
          break;
        }
        
    }
    if(!duplicate){
            orginal.push(arr[i])
        }
}
return orginal;
}

console.log(removeDuplicates(arr))