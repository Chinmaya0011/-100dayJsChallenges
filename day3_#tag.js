let str = 'chinmaya kumar mishra';

function getHash(str) {
    let str1 = str.split(' ');
    let capitalized = [];
    for (let i = 0; i < str1.length; i++) {
        let word = str1[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalized.push(capitalizedWord);
    }

    return '#' + capitalized.join('');
}

console.log(getHash(str)); // Output: '#ChinmayaKumarMishra'
