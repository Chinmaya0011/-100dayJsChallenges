function largestPairSum (numbers) {
let arr=numbers.sort((a,b)=>{
    return b-a;
}

)
return arr[0]+arr[1];
  }
  console.log(largestPairSum([21,5,12,67,34]))