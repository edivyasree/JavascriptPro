let arr = [11,3,4,5,3,2,2,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let obj={};
 for(let i of arr){
    obj[i]=(obj[i]||0)+1;

}
console.log(obj);
