let arr=[12,43,23,454,23,632,56,332,42];

function findMin(arr){
    // let minNum=arr[0];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]<minNum){
    //         minNum=arr[i];
    //     }
    // }
    // return minNum;
    let smal=0;
  arr.reduce((a,b)=>{
        if(a<b){
           smal=a;

        }
    });
    return smal;
   
}
console.log(findMin(arr))