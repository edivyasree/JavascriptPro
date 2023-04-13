let arr = [[7,3], [7,3], [3,8], [7,3], [7,3], [1,2]];
let arr1=[]
let obj={}
for(let i of arr){
    obj[i]=(obj[i]||0)+1
}
console.log(obj);
let val=Object.values(obj).sort((a,b)=>{
    return b-a
})[0]
console.log(val);