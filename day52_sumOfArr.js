function sumOfMinimums(arr) {
let minvalue=[];
for(let i=0;i<arr.length;i++){
  let min=arr[i][0]
    for(let j=0;j<arr[i].length;j++){
if(arr[i][j]<min){
    min=arr[i][j];
}
    }
    minvalue.push(min);
}
let sum=0;
for(let i=0;i<minvalue.length;i++){
    sum+=minvalue[i];
}
return sum;
}
  console.log(sumOfMinimums( [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))