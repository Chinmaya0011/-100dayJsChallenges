function findReapeat(str,l){
let word=str.toLowerCase();
let letter=l.toLowerCase();
let find=0;
for(let i=0;i<word.length;i++){
    if(word[i]===letter){
        find++
    }
}
return find
}

console.log(findReapeat("chinmayaAaaaa","a"))