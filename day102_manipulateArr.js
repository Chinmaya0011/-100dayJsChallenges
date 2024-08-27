function manipulateArray(arr) {
const obj={};
let result=[];

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1;
    }
}
for(let key in obj){
    if(obj[key]==1){
        result.push(key)
    }
}
console.log(obj)
return result;
}
console.log(manipulateArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
