function missingNum(arr){
    let len=arr.length;
let sum=(len*(len+1))/2;
let acc=arr.reduce((acc1,a)=>
    acc1+a
,0)
console.log(sum-acc)
}
missingNum([0,1])