
let arr1=[12,23,1,3,1355,4];
let arr=arr1.sort((a,b)=>a-b)
console.log(arr)
function findMedian(arr){
  
    let firstMedian=arr[0];
    let secondMedia=arr[1];
if(arr.length%2===0){
    let med=arr.length/2;
for(let i=0;i<arr.length;i++){
firstMedian=arr[med];
secondMedia=arr[med-1];
}
}
return (firstMedian+secondMedia)/2
}
console.log(findMedian(arr))