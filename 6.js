
// 6

// Maximum Sum Subarray Problem (Kadaneâ€™s Algorithm)

// Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
 
// Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.

let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.
let arr2=arr.slice(3,7)
let sum=0
for(let i of arr2){
    sum=sum+i
}
console.log(arr2);
console.log(sum);



// let arr1=new Set(arr)
// console.log(arr1);
// for(let i of arr1){
//     for(let j of arr1){
//         if(i+j==6){
//             console.log(i,j,i+j);
         
//         }
        
//     }
// }
