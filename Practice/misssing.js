function findMissingNumber(arr) {
  const n = arr.length + 1; // including the missing number
  const sum = (n * (n + 1)) / 2; // sum of 1 to n numbers
  const actualSum = arr.reduce((e, i) => e + i, 0); // sum of the array
  return sum - actualSum;
}

const arr = [1, 2, 3, 5, 6];
console.log(findMissingNumber(arr)); // Output: 4


let a=[1,2,5,4,3,10]

let b=[0];
for(let i=0;i<10;i++){
if(a[i]>b){
  b=a[i]
}
}
console.log(b,"max");//Largest number



let ar=[7,5,9,6,5,4,2,3]
let arr1=arr.sort()
let ar1=[]
// console.log(arr1);
for(let i=1;i<10;i++){
  if(ar.indexOf(i)==-1){
    ar1.push(i)
  }
}
console.log(ar1);