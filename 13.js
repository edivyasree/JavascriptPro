// 13)
// Find two numbers with maximum sum formed by array digits
// Input:  { 4, 6, 2, 7, 9, 8 }
// Output: The two numbers with maximum sum are 974 and 862
 
 
// Input:  { 9, 2, 5, 6, 0, 4 }
// Output: The two numbers with maximum sum are 952 and 640

// let arr=[9, 2, 5, 6, 0, 4]
 let arr=[4, 6, 2, 7, 9, 8]
let arr1=arr.sort((a,b)=>b-a)
let temp=0,temp1=0
console.log(arr1);
for( let i in arr){
    if(i%2==0){
   temp=temp*10+arr[i];
    }
    else{
        temp1=temp1*10+arr[i]
    }
}
console.log(temp);
console.log(temp1);