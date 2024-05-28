
// function listSquared(m, n) {
//     let result=[]
//      for(let i=m;i<=n;i++){
//  let div=[];
//          for(let j=1;j<=i;j++){
//  if(i%j===0){
//      div.push(j)
//  }}
//  let sum=0;
//  for (let k = 0; k < div.length; k++) {
//      sum += div[k] * div[k]; // Sum the squares of the elements
//    }
 
//  let sqrt=Math.sqrt(sum);
//  if(sqrt===Math.floor(sqrt)){
//  result.push([i,sum])
//  }
 
//          }
     
//      return result;
//  }
// //  console.log(listSquared(1,250))
// function doSomething(callback) {
//     callback();
//     console.log("Doing something...");
    
// }

// function callback() {
//     console.log("Callback executed!");
// }

// doSomething(callback); // Outputs: Doing something... Callback executed!

const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
  
};

console.log(person.fullName); // Output: John Doe
