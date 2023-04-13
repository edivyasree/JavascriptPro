// Find the odd occurring element in an array in a single traversal
// Given an integer array, duplicates are present in it in a way that all duplicates appear an even
//  number of times except one which appears an odd number of times. Find that odd appearing element 
//  in linear time and without using any extra memory.
// For example,

// Input:  arr[] = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3]
 
// Output: The odd occurring element is 4

let arr= [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3]
let arr1=[]
let arr2=[]
const obj={}
for(let i of arr){
  obj[i]=(
    obj[i]||0)+1
  }
  console.log(obj);
  let value=Object.values(obj)
  console.log(value);
  let odd;
  value.map((e)=>
  {
    if(e%2!==0){
      odd=e
    }
  })
  // console.log(odd);
  for (i in obj){
    if(odd==obj[i]){
    console.log(i);
  }}
  for(j of arr2){
    if(j%2==1){
      // console.log(j);
    }
  }