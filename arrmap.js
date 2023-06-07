const arr = [27,23,32,42,52,62]
let arr1=[]
let b1=JSON.stringify(arr)
console.log(b1);
let b2=b1.split('')
console.log(b2);
b2.map((e,i)=>{
    if(e=="2"){

    }
    else{
arr1.push(e)
    }
})

console.log(arr1);
