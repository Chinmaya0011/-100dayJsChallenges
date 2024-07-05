function countNum(num){
let count=0;

for(let i=Math.abs(num);i>0;i--){
    i=i/10;
    count++;
}

console.log(count)

}
countNum(-1)