// Move all zeros present in an array to the end


// Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
 
// Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }

let arr=[ 6, 0, 8, 2, 3, 0, 4, 0, 1 ]
let arr2=[],arr3=[]
for(let i of arr){
    if(i==0){
        arr2.push(i)
    }
    else{
        arr3.push(i)
    }
}
let arr4=[...arr3,...arr2]
console.log(arr4);


































