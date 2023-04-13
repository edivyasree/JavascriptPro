let arr=[2,2,2,1,4,5,8,6,4,5,6,5,7,8]
let arr1=[]
// arr.map((e,i)=>{
//     if(e%2==0){
//     arr1.push(e)
//     }
// })
// console.log(arr1);
arr.filter((e)=>{
   if(e%2==0){
    arr1.push(e)
   }
})
console.log(arr1);