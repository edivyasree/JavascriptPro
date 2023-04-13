// Partition an array into two subarrays with the same sum

 
// Output: The two subarrays are {6, -4} and {-3, 2, 3} having equal sum of 2
let arr=[6, -4, -3, 2, 3]
let arr1=arr.slice(0,2)
let sum=0;
console.log(arr1);
let arr2=arr.slice(2,5)
console.log(arr2);
for(let i of arr2){
    sum=sum-i
}
console.log(Math.abs(sum))