// 19)
// Left rotate an array

// we will see how to left-rotate an array by specified positions. For example, left-rotating array { 1, 2, 3, 4, 5 } 
// twice results in array { 3, 4, 5, 1, 2 }.

let arr=[ 1, 2, 3, 4, 5 ]
let n=2
let arr1=[]
let arr2=[]
for(let i in arr){
    if(+i<2){
        arr1.push(arr[i])
    }else{
        arr2.push(arr[i])
    }
}
console.log(arr1,arr2);
let output=[...arr2,...arr1]
console.log(output);