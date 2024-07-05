function palindrome(num){
 let str=num.toString();
 let str1=""
for(let i=str.length-1;i>=0;i--){
str1+=str[i]
}
if(parseInt(str1)===num){
    return true;
}
return false
}
console.log(palindrome(1221))


