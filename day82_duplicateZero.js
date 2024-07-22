var duplicateZeros = function(arr) {
let result=[];
for(let i=0;i<arr.length;i++){
    result.push(arr[i]);
    if(arr[i]===0){
        result.push(0)
    }
}
console.log(result.slice(0,arr.length))
};
duplicateZeros([1,0,2,3,0,4,5,0])