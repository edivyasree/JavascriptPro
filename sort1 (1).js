function Sort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = ['hello','hi'];
  Sort(numbers);
  console.log(Sort(numbers));


// let arr = [7,8,9,1,2,3];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log("Sorted array=>", arr);