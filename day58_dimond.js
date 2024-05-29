function printDiamond(num) {
    let diamond = "";
    // Upper half of the diamond
    for (let i = 1; i <= num; i++) {
        // Add spaces before the stars
        for (let j = 0; j < num - i; j++) {
            diamond += " ";
        }
        // Add stars
        for (let k = 0; k < 2 * i - 1; k++) {
            diamond += "*";
        }
        // Move to the next line
        diamond += "\n";
    }
    // Lower half of the diamond
    for (let i = num - 1; i >= 1; i--) {
        // Add spaces before the stars
        for (let j = 0; j < num - i; j++) {
            diamond += " ";
        }
        // Add stars
        for (let k = 0; k < 2 * i - 1; k++) {
            diamond += "*";
        }
        // Move to the next line
        diamond += "\n";
    }
    return diamond;
}

console.log(printDiamond(5));
