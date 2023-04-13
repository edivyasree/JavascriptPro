// let num=null;
// console.log(num);

// let arr = [1,2,3,4,5];
// arr[100] = 6;
// console.log(arr.length);
// // output:101

const arr = [1,2,3,4,6,22,11,2,99,1,3,4,6,11,22,100];
var temp=0;
arr.forEach((element)=>{
    if(temp<element){
        console.log(temp)
        temp=element;
    }
});
console.log(temp);


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   let myString = JSON.stringify(person);
//   console.log(person);