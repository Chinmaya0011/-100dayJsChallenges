function calculateYears(principal, interest, tax, desired) {
   
   
    let totalIntrest;
   let taxOnIntrest;
   let netIntrest;
let newPrincipal
   for(let i=1;i<=100;i++){
    totalIntrest=principal*interest;
    taxOnIntrest=totalIntrest*tax;
    netIntrest=totalIntrest-taxOnIntrest;
     newPrincipal = principal+netIntrest;
      if(newPrincipal>=desired){
        return i;
      }
      principal=newPrincipal;
   }

}
console.log(calculateYears(1000, 0.05, 0.18, 1100))