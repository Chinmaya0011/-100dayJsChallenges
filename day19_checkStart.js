let str='chinMaya kumar mishra';
let str1='cHinmaya';

function startWith(str,str1){
    let start=false;
    let str2=str.toLowerCase().split(' ');
    let str3=str1.toLowerCase();

    for(let i=0;i<str2.length;i++){
        if(str2[i]===str3){
            start=true;
            break;
        }
    }
    return start;
}

console.log(startWith(str,str1))