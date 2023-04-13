let nums = [8, 7, 2, 5, 3, 1]
let arr=[]
let target=10
function print(nums){
for(let i of nums){
        for(let j of nums){
            if(i+j==target){
              arr.push(i,j)
              return arr
    }

}

}
}
let abc=print(nums)
console.log(abc);
