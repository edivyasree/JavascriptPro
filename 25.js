// 25)
// In-place merge two sorted arrays
// Input:
 
// X[] = { 1, 4, 7, 8, 10 }
// Y[] = { 2, 3, 9 }
 
// Output:
 
// X[] = { 1, 2, 3, 4, 7 }
// Y[] = { 8, 9, 10 }

let X = [1, 4, 7, 8, 10 ]
let Y= [ 2, 3, 9 ]
let c=[...X,...Y]
// console.log(c);
let d=c.sort((a,b)=>(a-b))
let val=c.splice(X.length)
let data2=d
console.log(data2);
console.log(val);
