
// Find the frequency of each element in a sorted array containing duplicates

// Given a sorted array containing duplicates, efficiently find each element’s frequency without traversing the whole array.

// Input: [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9]
// Output: {2: 3, 4: 3, 5: 2, 6: 1, 8: 2, 9: 1}
 
// Explanation:
 
// 2 and 4 occurs thrice
// 5 and 8 occurs twice
// 6 and 9 occurs once

let arr=[2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9]
let obj={}
for(let i of arr){
    obj[i]=(
      obj[i]||0)+1
    }
    console.log(obj);