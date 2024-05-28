function sumPairs(ints, s) {
let pairs=[];
let result=[];


for(let i=0;i<ints.length;i++){
    for(let j=i+1;j<ints.length;j++){
        if(ints[i]+ints[j]===s){
            pairs.push([i,j])
        }
    }
}

if(pairs.length>1){
for(let i=0;i<pairs.length;i++){
    for(let j=i+1;j<pairs.length;j++){
        if(pairs[i][1]<pairs[j][1]){
          return [ ints[pairs[i][0]],ints[pairs[i][1]]];
        }
       else{
        return [ ints[pairs[j][0]],ints[pairs[j][1]]]
       }
    }
}}
else if(pairs.length===1){
    return [ints[pairs[0][0]],ints[pairs[0][1]]]
}
else{
    return "none";
}
  }
  console.log(sumPairs([10, 5, 2, 3, 7, 5],         10))