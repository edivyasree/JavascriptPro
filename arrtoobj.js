// let a = ["acc","adsad","aawe","adwe"]
let a=[2,3,4,4,5,3,3,2,2,2,34,5,2]
// let b=Object.assign({},a)
// // let b={...a}
// console.log(b);
let b={}
 for(i of a){
    b[i]=(b[i]||0)+1
 }
 console.log(b);
