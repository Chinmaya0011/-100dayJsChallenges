let str='chinmaya kumar mishra';

function countVowel(str){
    let count=0;
    let vowelLetters='aeiou';
    for(let i=0;i<vowelLetters.length;i++){
        for(let j=0;j<str.length;j++){
            if(vowelLetters[i]===str[j]){
                count+=1
            }
        }
    }
    return count;
}
console.log(countVowel(str))