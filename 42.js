// Connect `n` ropes with minimal cost

// Given n ropes of different lengths, connect them into a single rope with minimum cost. Assume that the cost to connect two ropes is the same as the sum of their lengths.

// Input:  [5, 4, 2, 8]
// Output: The minimum cost is 36 
// [5, 4, 2, 8] –> First, connect ropes of lengths 4 and 2 that will cost 6.
// [5, 6, 8]    –> Next, connect ropes of lengths 5 and 6 that will cost 11.
// [11, 8]      –> Finally, connect the remaining two ropes that will cost 19.
 
// Therefore, the total cost for connecting all ropes is 6 + 11 + 19 = 36.

let input=[5,4,2,8]
let res1=input[1]+input[2]
let res2=input[0]+res1
let res3=res2+input[3]
console.log(res1+res2+res3);
