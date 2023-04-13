const input = ["2","3","4","2","3"];
const array=[]

// function removeDuplicate(arr) {
//     const result = [];
//     let id = 0;
//     const tmp = {};

//     for (let i = 0; i < arr.length; i++)
//      {
//         if (!tmp[arr[i]])
//          {
//             tmp[arr[i]] = 1;
//            result[id] = arr[i];
//             id++;
         
//         } 
//     }
//     return result;
// }

// console.log(removeDuplicate(input));
for(i=0;i<input.length;i++){
array.push(parseInt(input[i]))
}
console.log(array);
function getunique(array){
    let Arr=[];
    for(let i of array){
        if(Arr.indexOf(i)===-1){
            Arr.push(i);
        }
    }
    console.log(Arr);
}
getunique(array);
