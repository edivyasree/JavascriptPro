// Given an array of positive and negative integers, segregate them without changing the relative order of

// elements. The output should contain all positive numbers follow negative numbers while maintaining the same

// relative ordering.

// For example,

let arr=[9, -3, 5, -2, -8, -6, 1, 3]

Output: [-3, -2, -8, -6, 9, 5, 1, 3]
let arr1=[],arr2=[],arr3=[]
for(let i of arr){
    if(i<0){
        arr1.push(i)
    }
   else if(i>0){
        arr2.push(i)
    }
}
arr3=[...arr1,...arr2]
console.log(arr3);