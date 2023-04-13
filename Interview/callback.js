function display(a,callback){
    console.log(a)
    callback();
}
function show(){
    console.log("i am call back function");
}
display("priya",show)