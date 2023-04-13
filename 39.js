// Find the number of 1’s in a sorted binary array

// Input:  nums[] = [0, 0, 0, 0, 1, 1, 1]
 
// Output: The total number of 1’s present is 3
 
 
// Input:  nums[] = [0, 0, 1, 1, 1, 1, 1]
 
// Output: The total number of 1’s present is 5


let nums=[0, 0, 1, 1, 1, 1, 1]
// let nums=[0, 0, 0, 0, 1, 1, 1]
let count=0;
for(let i of nums){
if(i==1){
    count++;
}
}
console.log(count);
