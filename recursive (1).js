let a=[{
    name:"abc",
    age:3,
    subject:[
        {
            name:"def",
            age:4,
            data:[
                {
                   name:"fgh",
                   age:5
                }]
        }]
}]
let arr=[],arr1=[] ,sum=0
function value(cal){
// console.log(cal);
for(let i in cal){
    let a=cal[i];
    // console.log(cal[i])
    if(typeof a==="object"){
        value(a)
    }
    else if(typeof a==="number"){
        sum+=a;
    }
    else if(typeof a==="string"){
      arr.push(a);
    }

}

}
value(a);
// console.log(sum)

arr.push(sum)
console.log(arr)





