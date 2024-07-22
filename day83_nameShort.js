
function nameShort(name){
    const len=name.length;
    if(len>8){
        return name.slice(0,8)+"..."
    }

}
console.log(nameShort("Chinmaya Kumar Mishra"))