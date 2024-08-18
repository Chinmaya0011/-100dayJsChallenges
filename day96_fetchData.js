
// async function fetchData(){
//     try{
//      const data=await fetch("https://randomuser.me/api");
//      if(!data.ok){
//         console.log("no data availabel")
//      }
//      const response=await data.json();
//      console.log(response)
//     }
// catch(error){
//     console.log(error)
// }

// }
// fetchData()

fetch("https://randomuser.me/api")
.then(response=>{
 return   response.json()
})
.then(data=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})