// 16)Find an index of the maximum occurring element with equal probability

// For example, consider the input: {4, 3, 6, 8, 4, 6, 2, 4, 5, 9, 7, 4}. The maximum occurring element, 4, occurs at index 0, 4, 7, and 11. 
// The solution should return any one of these indices with an equal probability. If there are two maximum occurring elements in the array,
//  the solution should consider the first occurring maximum element.



let arr=[4, 3, 6, 8, 4, 6, 2, 4, 5, 9, 7, 4]
let target=4
for(i in arr){
    if(arr[i]==target){
        console.log(i);
    }}