let password="Chinmaya@2";

function passwordValid(password){
    let checkLet1=/[A-Z]/.test(password);
    let checkLet2=/[a-z]/.test(password);
    let checkNum=/[0-9]/.test(password);
    let checkSymbol=password.includes("@"||"!"||"#"||"%"||"&");
if(password.length>=8 && checkLet1 && checkLet2 && checkNum && checkSymbol){
    console.log("your password valid")
    return;
}
console.log("password invalid")
}
passwordValid(password)