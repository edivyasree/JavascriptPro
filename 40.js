// 40)
// Longest Alternating Subarray Problem
// Given an array containing positive and negative elements, find a subarray with alternating positive and negative elements, and in which the subarray is as long as possible.

// The Longest Alternating Subarray problem differs from the problem of finding the Longest Alternating subsequence. Unlike a subsequence, a subarray 
// is required to occupy consecutive positions within the original array.

 
// For example, consider array { 1, -2, 6, 4, -3, 2, -4, -3 }. The longest alternating subarray is { 4, -3, 2, -4 }. Note that the longest alternating subarray might not be unique.

function abc(a,n){
    let longest=1;
    let cnt=1;
    for(i=1;i<n;i++){
        if(a[i]*a[i-1]<0){
            cnt++
            console.log(cnt);
        }
    }

}
