// 8

// Maximum Product Subset Problem


 
// Output: The maximum product of a subset is 15360

// Input:  nums[] = { -6, 4, -5, 8, -10, 0, 8 }
 
// Output: The maximum product of a subset is 15360

let  nums= [ -6, 4, -5, 8, -10, 0, 8 ];
let sum=1;
nums.sort((a,b)=>{
    return b-a
})
for(let i=nums.length-1;i>=0;i--){
if(String(nums[i]).includes('-') &&! String(nums[i-1]).includes('-'))
{
    nums[i]=0
}
}
for(let i of nums){
    if(i==0){

    }
    else{
        sum=sum*i
    }
}
console.log(sum);