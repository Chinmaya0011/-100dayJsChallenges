function chromosomeCheck(sperm) {
  if(sperm.toLowerCase().includes("y")){
console.log("Congratulations! You're going to have a son")
  }
  else{
    console.log("Congratulations! You're going to have a daughter.")
  }
}
chromosomeCheck("xy")