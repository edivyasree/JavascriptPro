// 31) Binary Search Algorithm
// Given a sorted array of n integers and a target value, determine if the target exists in the array in logarithmic 
// time using the binary search algorithm. If target exists in the array, print the index of it.

// Input:
 
// nums[] = [2, 3, 5, 7, 9]
// target = 7
 
// Output: Element found at index 3
 
 
// Input:
 
// nums[] = [1, 4, 5, 8, 9]
// target = 2
 
// Output: Element not found

let arr=[2,3,5,7,9]
let target=7
for(i in arr){
    if(arr[i]==target){
        console.log(i);
    }
    else {
     
    }
}
console.log("not found");   