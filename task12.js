let a = [
{
  name:"manoj",
  group:[{
      name:"venkat"
    },
    {
      name:"mouli"
    },{
    name:"sai",
    group:[{
        name:"Hello"
},{
        name:"Hello1"
}]
}]
}
]
// var a = [
// {
//   name:"manoj",
//   group:[{
//       name:"venkat"
//     },
//     {
//       name:"mouli"
//     },{
//     name:"sai",
//     group:[{
//         name:"Hello"
// },{
//         name:"Hello1"
// }]
// }]
// }
// ]
let arr=[],sum=0
function value(cal){
for( let i in cal){
   let a=cal[i]
   if(typeof a==="object"){
       value(a);
   }
   else if(typeof a==="string"){
       arr.push(a)
   }
   else if(typeof a==="number"){
       sum+=a;
   }
}
}
value(a)
console.log(arr);
console.log(sum);
