let arr=[1,2,4,55];
function findProduct(arr){
    let prod=1;

for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr.length){
prod*=arr[i];
    }
}
return prod;
}
console.log(findProduct(arr))