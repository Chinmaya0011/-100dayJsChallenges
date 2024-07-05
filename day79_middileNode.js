var middleNode = function(head) {
    let mid=Math.floor((head.length)/2);
    let arr=[];
    for(let i=mid;i<head.length;i++){
        arr.push(head[i])
    }
return arr
};

middleNode([4,5,6])