// 33)
// Find the first or last occurrence of a given number in a sorted array
// Given a sorted integer array, find the index of a given number’s first or last occurrence. If the element is not present in 
//the array, report that as well.

// Input:
 
// nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
// target = 5
 
// Output:
 
// The first occurrence of element 5 is located at index 1
// The last occurrence of element 5 is located at index 3
 
 
// Input:
 
// nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
// target = 4
 
// Output:
 
// Element not found in the array

let arr=[2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
// let arr=[2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
let target=5
for(i in arr){
    if(arr[i]==target){
        console.log(i);
    }
    else {
     
    }
}
console.log("not found");   
