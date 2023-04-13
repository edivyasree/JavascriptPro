let a1 = [
    {
        "abc":"dfbjf",
        "age":"25",
        "num":"10"
    },
    {
        "azx":"adfsf",
        "age":"26",
        "num":"11"
    },
    {
        "xys":"dfdjggf",
        "age":"30",
        "num":"12"
    }
]

// let a24=JSON.stringify(a1,["abc","azx","xys"])
// let aa=JSON.parse(a24)
// let sum=0
// let arr=[]
// function rec(cal){

//     for(let i in cal)

//     {
//      let a=cal[i]
//         if(typeof(a)=="object"){
//             rec(a)
//         }
//         else if(typeof(a)=="string"){
//             arr.push(a)
            
//         }
//     }
// }
// rec(aa)

 

// // console.log(arr)

// {
// a1.map((e)=>{
// //  console.log(e.age)  
//     let b=e.age
  
//    sum+=parseInt(b) 
  


// })

// }
// console.log(arr,sum);

//output=[dfbjf,adfsf,dfdjggf,81]
let addition = 0;
let arr = []
for(let i of a1){
    for(let j in i){
        // if(typeof +i[j] == 'number' && !isNaN(+i[j])){
        //    addition = addition + +i[j];
        // }else{
        //     arr.push(i[j])
        // }
        if(j == 'age'){
            addition = addition + +i[j];
        }else{
            arr.push(i[j]);
        }
    }
}
arr.push(addition)
console.log(arr);
