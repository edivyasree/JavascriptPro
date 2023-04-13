// Find all elements in an array that are greater than all elements to their right
// For example, consider the array [10, 4, 6, 3, 5]. 
// The elements that are greater than all elements to their right are 10, 6, and 5.
let array= [10, 4, 6, 3, 5]
for(let i of array){
if(i>=5){
    console.log(i,"right");
}
else {
    // console.log(i,"left")
}
}