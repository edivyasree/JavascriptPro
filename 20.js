// 20)
// Right rotate an array `k` times

// In this post, we will see how to right-rotate an array by specified positions. For example, right rotating array { 1, 2, 3, 4, 5, 6, 7 }
//  three times will result in array { 5, 6, 7, 1, 2, 3, 4 }.

let array=[ 1, 2, 3, 4, 5, 6, 7];
let val = 3
val = array.length-val
let arr1 = [];
let arr2 = []
for(let i in array){
    if(+i<val)
   {
    arr1.push(array[i])
   }
   else{
    arr2.push(array[i])
}
}
console.log(arr1,arr2);
let output=[...arr2,...arr1]
console.log(output);
   