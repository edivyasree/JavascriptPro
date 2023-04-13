let a1="aaabbbbcccdddd"
let a=a1.split('',)
console.log(a);


// let a = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2] 
//   let obj = {} 
//   for (let i of a) 
//   { obj[i] = (obj[i] || 0) + 1 } 
//   console.log(obj); 
//   let val = Object.entries(obj).sort((a, b) => { return b[1] - a[1] })
//    console.log(val);

let obj={}
for(let i of a){
    obj[i]=(obj[i]||0)+1
}
console.log(obj);
let sort=Object.entries(obj).sort((a,b)=>{return  b[1] - a[1] })
console.log(sort);