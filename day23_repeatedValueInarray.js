let arr=[1,1,2,3,4,2,4,3];

function findRepeat(arr){
    let count={};
    for(let i=0;i<arr.length;i++){
        if(count[arr[i]]){
            count[arr[i]]++;
        }
        else{
            count[arr[i]]=1;
        }
    }
    console.log(count);
}
findRepeat(arr);