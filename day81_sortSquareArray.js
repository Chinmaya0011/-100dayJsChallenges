var sortedSquares = function(nums) {
    let sqr=[];
    for(let i=0;i<nums.length;i++){
        sqr.push(nums[i]*nums[i])
    }
    return sqr.sort((a,b)=>a-b)
};
console.log(sortedSquares([-7,-3,2,3,11]))