// function bubbleSort(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             // if (arr[j + 1] < arr[j]) 
//            if(arr[j]>arr[j+1])
//             {
//                 // [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//         console.log(arr)
//     };
//     return arr;
   
// };
// bubbleSort([5, 3, 8, 4, 6]);

// console.log(bubbleSort([5, 3, 8, 4, 6]));

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
        console.log(arr);
    }

}
bubbleSort([2,3,4,8,6,4])