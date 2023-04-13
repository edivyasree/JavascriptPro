// const obj = {a:3, b:1, c:4, d:5}
// let obj1=[],b;
// for(i in obj){
//    obj1.push([i,obj[i]]);
// }
// obj1.sort(function(a,b){
//      return a[1]-b[1];
// })
let obj = {a:3, b:1, c:4, d:5};

let entries = Object.entries(obj);
console.log(entries);

let sorted = entries.sort((a, b) => a[1] - b[1]);
console.log(sorted);
