var a = [27,23,32,42,52,62]
let b1=JSON.stringify(a)
console.log(b1);
let b2=b1.split('')
console.log(b2);
let a1=(b2.map(element => Number(element)));
console.log(a1);
let arr2=[]

// for(let i of b2){
//     if(typeof(i)=="string"){
      
//         arr2.push(i)
//     }
// }

let b3=a1.sort().join('')
console.log(b3);
// for(let i of a){
//     a.map((e,i)=>{
//       let  b=e.split( )
//         console.log(b);
//     })
// }
