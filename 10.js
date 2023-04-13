// Find the minimum difference between the index of two given elements present in an array

// Given an integer array nums and two integers x and y present in it, 
// find the minimum absolute difference between indices 
// of x and y in a single traversal of the array.

// Input: 
// Output: 2
 
// Explanation: 
// Element 3 is present at index 1 and 7, and element 2 is present at index 5. 
// Their minimum absolute difference is min(abs(1-5), abs(7-5)) = 2
let arr = [1, 3, 5, 4, 8, 2, 4, 3, 6, 5]
let arr1 = [];
let  x = 3;
 let y = 2
let xindex=[];
let yindex=[]
for (let i in arr){
    if(arr[i]==x){
        xindex.push(+i)
    }
    else if(arr[i]==y){
        yindex.push(+i)
    }
}
console.log(xindex,yindex);
for(let i of xindex){
    for(let j of yindex){
      arr1.push(Math.abs(i-j))
    }
}
let val = arr1.sort((a,b)=>{
    return a-b
})[0]
console.log(val);

