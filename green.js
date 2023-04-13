// a = [
//     {a: 'happy', b: 'robin', c: ['blue','green']},

// {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},

// {a: 'sad', b: 'goldfish', c: ['green','red']}
// ]; 
// let arr=[],arr1=[] 
// function value(cal){
// for(let i in cal){
//     let a=cal[i];
//     if(typeof a==="object"){
//         value(a)
//     }
// }
//     if(cal.c!==undefined){

//         arr.push(cal.c)
    
//     }
// }
// value(a);
// console.log(arr.flat(Infinity))




let a = [
    {a: 'happy', b: 'robin', c: ['blue','green']},
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
    {a: 'sad', b: 'goldfish', c: ['green','red'], e:["sdds"]}
];
let arr=[],arr1=[] 
function value(cal){
for(let i in cal){
    let a=cal[i];
    if(typeof a==="object"){
        value(a)
    }
}
    if(cal.c!==undefined){

        arr.push(cal.c)
    
    }
    if(cal.e!==undefined){
        arr.push(cal.e)
    }
}
value(a);
console.log(arr.flat(Infinity))
// console.log(arr1.flat(Infinity))

// o/p:[
//     'blue',   'green',
//     'green',  'black',
//     'orange', 'blue',
//     'green',  'red',
//     'sdds'
//   ]
  




// let data = [

//     {a: 'happy', b: 'robin', c: ['blue','green']},



//     {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},



//     {a: 'sad', b: 'goldfish', c: ['green','red'], e:{f:["desdfcsd"]}}

// ];
// let arr=[],arr1=[] 
// function value(cal){
// for(let i in cal){
//     let data=cal[i];
//     if(typeof data==="object"){
//         value(data)
//     }
//     else if(typeof data==="string"){
//         arr.push(data)
//     }
// }

//     // if(cal.c!==undefined){

//     //     arr.push(cal.c)
    
//     // }
// }
// value(data);
// console.log(arr.flat(Infinity))