"use strict";

function flattenAndSort(array) {

  return array.flat().sort((a,b)=>{return a-b})
}
console.log(flattenAndSort( [[3, 2, 1], [4, 6, 5], [], [9, 7, 8,100]]))