function mergeArrays(one, two) {
   let result = [];
   for (let i = 0; i < one.length; i++) {
       if (i < two.length) {
           if (one[i]["v"] === two[i]["v"]) {
               result.push(two[i]);
           } else {
               result.push(one[i], two[i]);
           }
       } else {
           result.push(one[i]);
       }
   }

   for (let i = one.length; i < two.length; i++) {
       result.push(two[i]);
   }

   // Sort the result by the 'v' property
   result.sort((a, b) => a.v.localeCompare(b.v));

   return result;
}

// Testing the function
console.log(mergeArrays(
   [{ v: 'a' }, { v: 'b' }],
   [{ v: 'a', data: [1, 2, 3] }, { v: 'c', data: [4, 5, 6] }]
));
