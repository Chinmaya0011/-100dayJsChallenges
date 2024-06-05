function gimme(triplet) {
    // Create a copy of the triplet array to avoid modifying the original
    let sortedTriplet = [...triplet].sort(function(a, b) {
        return a - b;
    });

    // The middle element in the sorted array
    let middleValue = sortedTriplet[1];

    // Find the index of the middle element in the original array
    return triplet.indexOf(middleValue);
}

// Example usage
console.log(gimme([1, 2, 3])); // Output: 1
console.log(gimme([5, 10, 14])); // Output: 1
