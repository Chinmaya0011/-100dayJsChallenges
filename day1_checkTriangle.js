function checkTraingle(a,b,c){
    if(a===b&&b===c){
        console.log('equilateral')
    }
    else if(a===b||b===c||c===a){
        console.log('iscoceles')
    }
    else{
        console.log('scelen')
    }
}
checkTraingle(1,4,4)