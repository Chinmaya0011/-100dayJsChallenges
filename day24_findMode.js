let arr=[1,2,3,1,7,4,7,4,4];

let obj={};

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1;
    }
}
let maxFrequency=0;
for(let j in obj){
   
if(obj[j]>maxFrequency){
    maxFrequency=j;

}


}
console.log(maxFrequency)