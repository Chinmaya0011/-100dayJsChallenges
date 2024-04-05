let arr=[12,32,4,3,57];

function findAverage(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }
  return sum/arr.length;
// let total=arr.reduce((accum,curElem)=>accum+curElem,0);
// return total/arr.length;
}
console.log(findAverage(arr))