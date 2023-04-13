// let a=["@", "@", "@", "@"];
// for(let i in a){
// if(a[i]==="@"){
//     // console.log("true");
// }
// else{
//     console.log("false");
// }
// }
// console.log("true");




// let a=["abc", "abc", "abc", "abc"];
// for(let i in a){
// if(a[i]==="abc"){
//     // console.log("true");
// }
// else{
//     console.log("false");
// }
// }
// console.log("true");


// let a=["&&", "&", "&&&", "&&&&"];
// for(let i in a){
//     if((a[i]%2===0)==="&"){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
//     }


// let a=["SS", "SS", "SS", "Ss"];
// for(let i in a){
//     if((a[i]%2===0)==="SS"){
//         console.log("true");
//     }
//     else{
      
//     }
 
//     }

//     console.log("false");


let a=["&&", "&", "&&&", "&&&&"];
let arr= []
for(let i of a){
    if(arr.indexOf(i)==-1)
    {
        arr.push(i)
    }
}
if(arr.length==1){

 console.log(true);
}else{
    console.log(false);
}