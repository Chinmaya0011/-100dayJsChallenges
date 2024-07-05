function fibonacci(a,b){
let num1=a;
let num2=b;

let series=[num1,num2]
for(let i=0;i<=10;i++){
    let num3=num1+num2
series.push(num3);
num1=num2;
num2=num3;
}
return series;
}
console.log(fibonacci(0,1))