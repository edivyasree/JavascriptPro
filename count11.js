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