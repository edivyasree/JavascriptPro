var x1 = 12332232134455;
var x=x1.toString()
console.log(x1);
var b=x.split('')
let arr=[]
// console.log(b);
for(let i of x){
    if(arr.indexOf(i)===-1){
       arr.push(i) 
    }
}
console.log(arr);
arr1=(arr);
console.log(arr1);