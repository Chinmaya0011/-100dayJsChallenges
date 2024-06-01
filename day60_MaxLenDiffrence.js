function mxdiflg(a1, a2) {
    if(a1.length>1&&a2.length>1){
let a1MaxLength=a1.reduce((maxLength, currentString) => {
    return Math.max(maxLength, currentString.length);
}, 0);
let a2MaxLength=a2.reduce((maxLength, currentString) => {
    return Math.max(maxLength, currentString.length);
}, 0);
return Math.abs(a1MaxLength-a2MaxLength);

}
else{
    return -1;
}
}
let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(a1, a2))