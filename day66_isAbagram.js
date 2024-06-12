var isAnagram = function(test, original) {
    // Step 1: Normalize both strings to lowercase
    let test1 = test.toLowerCase();
    let original1 = original.toLowerCase();

    // Step 2: Split each string into an array of characters
    test1 = test1.split('');
    original1 = original1.split('');

    // Step 3: Sort the arrays
    test1.sort();
    original1.sort();

    // Step 4: Join the sorted arrays back into strings
    test1 = test1.join('');
    original1 = original1.join('');

    // Step 5: Compare the sorted strings
    return test1 === original1;
};