// Find the minimum index of a repeating element in an array
// Input:  { 5, 6, 3, 4, 3, 6, 4 }
// Output: The minimum index of the repeating element is 1
// Input:  { 1, 2, 3, 4, 5, 6 }
// Output: Invalid Input

let arr=[5, 6, 3, 4, 3, 6, 4 ]
let obj={}
for(let i of arr){
    obj[i]=(obj[i]||0)+1
    }
console.log(obj);
let abc=Object.values(obj).sort((a,b)=>{
    return a-b
})[0]   =
 console.log(abc);   