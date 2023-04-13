// let array1 = [1, 2, 3];
// let array2 = [100, 2, 1, 10];
// let array3
// for(let i of array1){
//     for(let j of array2){
//       array3=Array.from(new Set([...array1, ...array2]));
//     }
// }
// console.log(array3);

// o/p:[ 1, 2, 3, 100, 10 ]


// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let sum=[]
// // var sum = array1.map(function (num, idx) {
// //   return num + array2[idx];
// // }); 
// // console.log(sum);
// for(var i = 0; i < array1.length; i++){
//   sum.push((array2[i] - array1[i]));
//  }
//  console.log(sum);
// //  o/p:[ 2, 5, 4, 4, 4 ] subraction

//Diff of two array


// program to perform intersection between two arrays



// let array1 = [1, 2, 3];
// let array2 = [100, 2, 1, 10];
// const Result = array1.filter(x => array2.indexOf(x) !== -1);

// console.log(Result);

// o/p:[1,2]



// let array = [1, [2], [3, [[4]]],[5,6]];
// let array1=[]
// function sub(a){

//   for(let i of a){
//     if(Array.isArray(i)){
//       sub(i)
//     }
//     else{
//       array1.push(i)
//     }
//   }
// }
// sub(array)
// console.log(array1);





// let array1 = [1, 2, 3, 4, 5];
// let sub;
// let array2 = [1, [2], [3, [[4]]],[5,6]];
// let array3=array2.flat(Infinity)
// console.log(array3);
// const Result = (array1.filter(x => array3.indexOf(x) !== -1));
// console.log(Result);



// let array = [1,2,3,4,5]
// for(let i in array ){
//   console.log(typeof i)
// }
// o/p:String


let array1 = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const array2 = [...new Set(array1)]

console.log(array2)

