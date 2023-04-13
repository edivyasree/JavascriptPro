// let name="Sree";
// console.log(name);
// let rate=3.0;
// rate=1;
// console.log(rate);


// let arr = [1,2,3,3];
// arr.length = 0;
// console.log(arr)

// arr.length = 4;
// console.log(arr);
// o/p:<[]>


const falsyValues = [null, undefined, false, 0, '', 1, 2, 3,"venkat", "kalyan"]
const falsevalue = [null, undefined, false, 0]
debugger
let required = [];
falsyValues.map((ele)=>{
    
    for(let i of falsyValues){
        if(i === ele){
            required.push(i)
    }
}})
console.log(required)
