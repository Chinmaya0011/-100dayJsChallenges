function replace(s){
let s1=s.toLowerCase()

const result=[]
for(let i=0;i<s1.length;i++){
if("aeiou".includes(s1[i])){
    result.push("!")
}
else{
    result.push(s1[i])
}

}
return result.join("")
  }
  console.log(replace("chInmaya"))