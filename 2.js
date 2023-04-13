// 2)Remove duplicates from a sorted linked list
// Given a linked list sorted in increasing order, write a function that removes duplicate nodes from
// it by traversing the list only once.
// For example, the list {1, 2, 2, 2, 3, 4, 4, 5} should be converted into the list {1, 2, 3, 4, 5}.
// Since the list is sorted, we can proceed down the list and compare adjacent nodes. When
// adjacent nodes are the same, remove the second one. There’s a tricky case where the node
// after the next node needs to be noted before the deletion.

let arr=[1, 2, 2, 2, 3, 4, 4, 5]
let arr1=new Set(arr)
console.log(arr1);