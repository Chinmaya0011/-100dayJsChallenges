let hexaColor="#f19a13";
let hexaColor1="#fff";
let hexaColor2="#1234567";
let hexaColor3="a3c113";
let hexaColor4="#t3c113";


function validHexa(hexaColor){
    return /^#([a-fA-F\d]{3}|[a-fA-F\d]{6})$/.test(hexaColor);
     
    
}
console.log(validHexa(hexaColor));
console.log(validHexa(hexaColor1));
console.log(validHexa(hexaColor2));
console.log(validHexa(hexaColor3));
console.log(validHexa(hexaColor4));
