function nbDig(n, d) {
    let count=0;
    for(let i=0;i<=n;i++){
        let sqr=(i*i).toString();
        for(j=0;j<sqr.length;j++){
            if(sqr[j]===d.toString()){
                count++
            }
        }
    }
    return count;
}
console.log(nbDig(10, 1)); // Output: 5