// let str="find the length of the string without using length method"
// let count=0;
// for(let i of str){
//     count++;
   
// }
// console.log(count);


// function truncateString(str, n) {
//     if (str.length > n) {
//       return str.substring(0, 19) + "...";
   
//     } else {
//       return str;
//     }
    
//   }
//  console.log(truncateString("We are doing JS string exercises", ));
// console.log(truncateString("We are doing JS string exercises", 19));
// console.log(truncateString('We are doing JS string exercises.',15,'!!'));



text_truncate = function(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
