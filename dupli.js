let origin = [[7,3], [7,3], [3,8], [7,3], [7,3], [1,2]];
let arr=[]
function value(cal){
    for(let i in cal){
        let b=cal[i]
        if(typeof b==="object"){
            value(b)
        }
        else {
            arr.push(b)
            // console.log(arr.push(b))
        }
    }

}
value(origin)

// console.log(arr)
let arr1=arr
let arr2=[];
for(let i of arr1){
    if(arr2.indexOf(i)==-1){
        arr2.push(i)
    }
}
console.log(arr2)
