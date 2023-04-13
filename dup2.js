var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
let arr1=[]
for(let i of arr){
    if(arr1.indexOf(i)==-1){
    
        arr1.push(i)
       
    }
}
console.log(arr1);



// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
 
//     function removeDuplicates(arr) {
//         return arr.filter((e,i) => arr.indexOf(e) === i);
//     }
//     removeDuplicates(arr)
//     console.log(removeDuplicates(arr));