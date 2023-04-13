
// Find pairs with difference `k` in an array

// Given an unsorted integer array, print all pairs with a given difference k in it.

// Input:
 
let arr = [1, 5, 2, 2, 2, 5, 5, 4]
let k = 3
// (2, 5) and (1, 4)
let arr1=new Set(arr)
console.log(arr1);
for(let i of arr1){
    for(let j of arr1){
        if(j-i==k){
            console.log(i,j);
        }  
    }
}
