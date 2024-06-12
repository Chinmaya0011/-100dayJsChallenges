let food={
    name:"apple",
    color:"green",
    price:123,
    stock:true,
    quantity:4,
}

let item=document.getElementById("food");

const renderFood=()=>{
 
item.innerHTML=`
<p>${food.name}<p/>
<p>${food.color}<p/>
<p>${food.price}<p/>
<p>${food.stock}<p/>
<p>${food.quantity}<p/>
`   
}
renderFood()


const handleBuy=()=>{

if(food.quantity>0){
    food.quantity-=1;
    renderFood()
}
if(food.quantity===0){
    food.stock=false;
    renderFood()
}
}