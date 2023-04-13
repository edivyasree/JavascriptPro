
// let value=new Promise()

let values= new Promise((resolve,reject)=>{
let conditio=-1;
if(conditio<0){
    resolve("sucessfuuly completed resolve path")
}
else{
    reject("sorry for rejected")
}
})
values.then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
})

// var message;
// function val(){
// message="hi"
// console.log(message)
// }
// val()