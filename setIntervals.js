// function greet(){
// console.log("hello world")
// }
// setInterval(greet,2000)
let count=0
let value= setInterval(function get(){
    count++
    if(count==5){
        clearInterval(value)
    }
    console.log("hello world")
},1000)