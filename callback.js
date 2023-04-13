function greet(name, callback,callback2){
    console.log("hello",name)
    callback(name)
    callback2()

}
function callme(name){
    console.log("call back function",name)
}
function called(){
    console.log("called")
}

greet("divya",callme,called)