let currency = {
    "usd": 1,
    "euro": 0.9,
    "gbp": 0.7,
    "inr": 82,
};

function currencyConvert(baseAmount, cur1, cur2) {
let amountInUsd=0;
  for(let i in currency){
    if(i===cur1){
amountInUsd=baseAmount/currency[i]
    }
  }
let convertAmount=0;
for(let i in currency){
    if(i===cur2){
convertAmount=amountInUsd*currency[i];
    }
  }
  return convertAmount;
}

console.log(currencyConvert(1, "euro", "inr")); // Output should be 100 / 82
