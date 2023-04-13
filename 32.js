// Find the missing number in an array without using any extra space

// Given a limited range array of size n and containing elements between 1 and n+1 with one element missing, find the missing number without using any extra space.

// Input:  { 3, 2, 4, 6, 1 }
// Output: The missing element is 5
 
// Input:  { 3, 2, 4, 5, 6 }
// Output: The missing element is 1
 
// Input:  { 3, 2, 4, 5, 1 }
// Output: The missing element is 6



// let array=[ 3, 2, 4, 5, 1]
let array=[3, 2, 4, 5, 6 ]
// let array=[3, 2, 4, 6, 1]
for(let i=1;i<=array.length;i++){
if(array.indexOf(i)===-1){
    console.log(i)
}
}
