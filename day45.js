let arr=[1,-4,1,-4,3,23,-6,-3,4,3,4,-8,-7,5,6];


function myChinmaya(arr){
    let posArr=[];
    let negArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            posArr.push(arr[i])
        }
        else{
            negArr.push(arr[i])
        }
    }
    let result=[];
    let maxLength=Math.max(posArr.length,negArr.length);
    for(let i=0;i<maxLength;i++){
        if(i<posArr.length){
            result.push(posArr[i])
        }
      if(i<negArr.length){
            result.push(negArr[i])
   }    
    }
    console.log(result)
}
myChinmaya(arr)