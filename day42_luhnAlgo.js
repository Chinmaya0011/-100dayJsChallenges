let cardNo=[79927398713];

function validCard(cardNo){
    let cardNo1=cardNo.toString()
    let revCard=[];
    for(let i=cardNo1.length-1;i>=0;i--){
        revCard.push(parseInt(cardNo1[i]))

}

for(let i=1;i<revCard.length;i++){
    revCard[i]=revCard[i]*2
    if(revCard[i]>9){
        revCard[i]=revCard[i]-9;
    }

 ++i;
}

let sumOfRevCard=0;
for(let i=0;i<revCard.length;i++){
    sumOfRevCard+=revCard[i];
}
console.log(sumOfRevCard)
if(sumOfRevCard%10===0){
    console.log("card is valid")
}
else{
    console.log("card is not valid")
}
}
validCard(cardNo)