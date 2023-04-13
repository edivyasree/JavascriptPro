// let array = [30, 2, 1, 4, 5, 6, 7, 3, 2]
// let j;
// for(i=0;i<array.length;i++){
// for(j=0;j<=i;j++)
//    if(array[j]<array[i]){
//  var b=array[i];
//  array[i]=array[j];
//  array[j]=b
//    }
// }
// console.log(array)


//Powers of number
// let n=6;
// let elements=3;
// let y=1;
// for(i=1;i<=elements;i++){
    
//     y=y*n;
//     console.log(i, '->' ,y)

// }



let nums = [1,2,7,7,2,7,11,15];
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if((nums[i]+nums[j])==9){
            console.log(i,j);
            return  
            }
        }   
}
