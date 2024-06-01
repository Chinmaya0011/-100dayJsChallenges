function rowWeights(array) {
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            sumOfEven += array[i];
        } else {
            sumOfOdd += array[i];
        }
    }

    return [sumOfEven, sumOfOdd];
}

console.log(rowWeights([100, 0])); // Output: [100, 0]
console.log(rowWeights([50, 60, 70, 80])); // Output: [120, 140]
console.log(rowWeights([13, 27, 49])); // Output: [62, 27]
console.log(rowWeights([100])); // Output: [100, 0]
