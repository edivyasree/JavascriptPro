//selection sort

let arr=[    3 , 5,  8,  4 , 1,  9, -2]
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