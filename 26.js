// Find the missing number in an array

// Given an array of n-1 distinct integers in the range of 1 to n, find the missing number in it in linear time.

// For example, consider array {1, 2, 3, 4, 5, 7, 8, 9, 10} whose elements are distinct and within the range of 1 to 10. 
//The missing number is 6.

let array= [1, 2, 3, 4, 5, 7, 8, 9, 10]
let arr1=[]
for(let i=1;i<=10;i++){
if(array.indexOf(i)===-1){
  arr1.push(i)
}
}
console.log(arr1)