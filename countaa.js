let  str = "aaaabbbbcccc"
let str1=str.split("",)
console.log(str1);
let obj={}
for(let i of str1){
    obj[i]=(obj[i]||0)+1
}
console.log(obj);