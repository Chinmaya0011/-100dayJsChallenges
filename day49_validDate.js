let myDate="01/23/1999";

function validDate(myDate){
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[1|2][0-9]|3[01])\/(19|20)\d{2}$/.test(myDate)
 }
console.log(validDate(myDate))