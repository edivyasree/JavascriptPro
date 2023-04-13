// let arrs1=[1,2,3,4,6]
// let arrs2=[];
// for(let i=1;i<6;i++){
//   if(arrs1.indexOf(i)===-1){
//     // console.log(i);
//      arrs2.push(i);
//   }
// }
// console.log(arrs2)


// note:if the array is not in sorted order then do sorting first
// let arrs1=[1,5,4,6,2]
// arrs1.sort();

let arr=[5,8,7,1,3,6]
let arr2=[]
let arr1=arr.sort()
console.log(arr1);
for(let i =1 ;i<=8;i++){
    if(arr1.indexOf(i)===-1){
arr2.push(i)
    }
}
console.log(arr2);