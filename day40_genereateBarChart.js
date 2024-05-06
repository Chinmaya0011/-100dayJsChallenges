

function generateBarChart(arr){

    for(let i=0;i<arr.length;i++){
        let star="";
        for(let j=0;j<arr[i];j++){
         star+="*"
            

        }
        console.log(star+"\n")
    }
}

generateBarChart([3,2,5,9])