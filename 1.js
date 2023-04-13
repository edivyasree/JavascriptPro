// 1) Clone a Linked List
// Write a function that takes a singly linked list and returns a complete copy of that list.
// The idea is to iterate over the original list in the usual way and maintain two pointers to keep
// track of the new list: one head pointer and one tail pointer, which always points to the last node
// of the new list. The first node is done as a special case, and then the tail pointer is used in the
// standard way for the others.
// oupput: 1 —> 2 —> 3 —> 4 —> nul

let arr=[1,2,3]
let arr1=[4]
let arr3=arr.push(arr1)
console.log(arr3);
let arr4=[null]
let arr5=arr.push(arr4)
console.log(arr);