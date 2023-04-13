
// Input:
 
// nums[] = [2, 3, 5, 7, 9]
// target = 7
 
// Output: Element found at index 3
 
 
// Input:
 
// nums[] = [1, 4, 5, 8, 9]
// target = 2
 
// Output: Element not found

let nums=[2, 3, 5, 7, 9]
let target=7;
for(let i in nums){
    if(nums[i]==target){
        console.log(i);
    }
}
//--------------------------------------------------------

let nums1=[1, 4, 5, 8, 9]
let target1=2;
for(let i in nums1){
    if(nums1[i]==target1){
        console.log(i);
    }
    else{

    }
}
console.log("not found");