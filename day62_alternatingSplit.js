

function encrypt(text, n) {
    if(text.length===0||n<=0){
        return text;
    }
    else{
let result=text;
for(let i=0;i<n;i++){
let oddEl="";
let evenEl="";
for(let j=0;j<result.length;j++){
    if(j%2!==0){
        oddEl+=result[j]
    }
    else{
        evenEl+=result[j]
    }
   
}
 result=oddEl+evenEl;
}
return result;}
}
console.log(encrypt("012345", 2))

function decrypt(encryptedText, n) {

    if(encryptedText.length==0||n<=0){
return encryptedText;
    }
    else{
    let result=encryptedText;
    for(let i=0;i<n;i++){
    let oddEl="";
    let evenEl="";
    for(let j=0;j<result.length;j++){
        if(j%2!==0){
            oddEl+=result[j]
        }
        else{
            evenEl+=result[j]
        }
       
    }
     result=oddEl+evenEl;
    }
    return result;}
    }
    console.log(decrypt("This is a test!", 0))
