var numberOfSteps = function(num) {
    
let count=0;
let myNum=num;

while(myNum!==0){
    if(myNum%2===0){
        
        myNum=myNum/2;
    }
    else{
        myNum=myNum-1;
       
    }
    count++
}
return count;
};
numberOfSteps(14)