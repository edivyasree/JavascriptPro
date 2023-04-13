// function divide(x,y){
//     return x/y
// }

// function multiply(x,y){
//     return x*y
// }
// function add(x,y){
//     return x+y
// }
// function subract(x,y){
//     return x-y;
// }

// function compute(callBack, x, y){
//     return callBack(x,y)
// }

// console.log(compute(divide, 10, 5))   
// console.log(compute(multiply, 10, 5))
// console.log(compute(add, 10, 5))
// console.log(compute(subract, 10, 5))


//-----------------------------------------------------------------

function total(callBack,x,y){
    return(callBack,x,y)
}
function add(x,y){
    return x+y;
}
function subract(x,y){
    return x-y
}
console.log(total(add,10,20));
console.log(total(add,20,30));
console.log(total(subract,20,10));