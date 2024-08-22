
    function findLongestWord(str){
        let str1=str.split(' ');
let long=str1[0];
for(let i=0;i<str1.length;i++){
  if(long.length<str1[i].length){
    long=str1[i]
  }
}
return long;
    }
    console.log(findLongestWord("cnn k kk hi n kufg xdf maiii mishrn vc cxpiia"))