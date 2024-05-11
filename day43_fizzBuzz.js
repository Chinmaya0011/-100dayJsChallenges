function fizzBuzz(a,b){
    let arr=[];
    for(let i=a;i<=b;i++){
        if(i%3===0 && i%5===0){
            arr.push("fizzBuzz")
        }
       else if(i%3===0){
            arr.push("fizz")
        }
        else if(i%5===0){
            arr.push("buzz")
        }
       else{
        arr.push(i)
       }
     
    }
console.log(arr)
}
let a=1;
let b=15;
fizzBuzz(a,b)