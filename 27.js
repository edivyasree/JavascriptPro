
// Find the missing number in an array without using any extra space
// Input:  { 3, 2, 4, 6, 1 }
// Output: The missing element is 5
 
// Input:  { 3, 2, 4, 5, 6 }
// Output: The missing element is 1
 
// Input:  { 3, 2, 4, 5, 1 }
// Output: The missing element is 6



let arr=[3, 2, 4, 5, 1 ]
// let arr=[ 3, 2, 4, 5, 6 ]
// let arr=[3,2,4,6,1]

let arr1=[]
for(let i=1;i<= 6;i++){
  if(arr.indexOf(i)===-1){
    arr1.push(i)
  }


}
console.log(arr1)