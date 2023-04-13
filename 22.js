// Selection Sort Alogrithm
// How Selection Sort works?
// The idea is to divide the array into two subsets – sorted subset and unsorted subset.
// Initially, the sorted subset is empty, and the unsorted subset is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted subset, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the subset boundaries one element to the right. The following example explains it all:

//             3  5  8  4  1  9 -2
// i = 0      -2  5  8  4  1  9  3
// i = 1      -2  1  8  4  5  9  3
// i = 2      -2  1  3  4  5  9  8
// i = 3      -2  1  3  4  5  9  8
// i = 4      -2  1  3  4  5  9  8
// i = 5      -2  1  3  4  5  8  9

           

let arr=[ 3 , 5,  8 , 4,  1 , 9 ,-2]
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        
   console.log( [arr[i], arr[lowest]] = [arr[lowest], arr[i]]);
      }
    }
    return arr
  }
  selectionSort(arr)
  console.log(arr);