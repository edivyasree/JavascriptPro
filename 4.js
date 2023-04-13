// 4)Find majority element (Boyerâ€“Moore Majority Vote Algorithm)

// Given an integer array containing duplicates, return the majority element if present. 
// A majority element appears more than n/2 times, where n is the array size.

// For example, the majority element is 2 in array {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}.
let arr=[2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
let arr1=[]
let obj={}
for(let i of arr){
    obj[i]=(obj[i]||0)+1
}
console.log(obj);
let val=Object.values(obj).sort((a,b)=>{
    return b-a
})[0]
console.log(val);