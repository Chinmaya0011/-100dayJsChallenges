function generateSixDigitCode() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    let code = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return "#"+code;
}

// Example usage
const sixDigitCode = generateSixDigitCode();
console.log(sixDigitCode);
