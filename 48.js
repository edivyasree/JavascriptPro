// 48)
// Problems solved using partitioning logic of Quicksort
// This post will discuss a few problems that can be easily solved in linear time and constant space by modifying the partitioning logic of the Quicksort algorithm.

// Problem #1
// Given a binary array, sort it in linear time and constant space. The output should print all zeroes, followed by all ones.

 
// For example,

// Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

let Input=  [1, 0, 1, 0, 1, 0, 0, 1 ]
let Input2=Input.sort()
console.log(Input2);