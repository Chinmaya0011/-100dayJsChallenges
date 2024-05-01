let obj={

}

function objIsEmpty(obj){
    for(let i=0;i<obj.length;i++){
        if(obj[i]!==null||obj[i]!==undefined){
            return "obj is not empty"
        }
    }
    return "obj is empty"
}
console.log(objIsEmpty(obj))