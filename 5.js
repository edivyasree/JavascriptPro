// Rearrange linked list in a specific manner
// Google Translate Icon
// Given a linked list, split it into two lists where each list contains alternating elements from the
// original list and then finally join them back together.
// For example,
// Input : 1 —> 2 —> 3 —> 4 —> 5 —> null
// Output: 1 —> 3 —> 5 —> 2 —> 4 —> null
// Practice This Problem
// To split the given list into two, we can use temporary dummy header nodes for both lists as they
// are being built. Each sublist has a “tail” pointer that points to its current last node – that way,
// new nodes can be appended at the end of each list easily. The dummy nodes give the tail
// pointers something to point to initially. The dummy nodes are efficient in this case because they
// are temporary and allocated in the stack. Finally, after both lists are formed, we join them by
// rearranging their pointers and fixing the head node

let arr=[1 , 2 , 3 , 4 , 5 , null]
let arr1=[],arr2=[]
for(let i of arr){
    if(i%2==0){
    arr1.push(i);
    }
    else{
       arr2.push(i)
    }
}
console.log(arr1);
console.log(arr2)
