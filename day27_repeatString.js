let string='chinu';

function repeatString(string,timeOfRepeat){
    let repeatedString="";
    for(let i=0;i<=timeOfRepeat;i++){
        repeatedString+=string;
    }

    return repeatedString;
}
console.log(repeatString(string,5))