// 15)
// Find a pair with a minimum absolute sum in an array
// Input:  A = [-6, -5, -3, 0, 2, 4, 9]
 
// Output: Pair is (-3, 4)
 
// (-5, 4) = abs(-5 + 4) = abs(-1) = 1, which is minimum among all pairs.

let a=[-6, -5, -3, 0, 2, 4, 9]
 let arr1=[]
 let arr2=[]
 for(i=0;i<a.length;i++){
    for(j=0;j<a.length;j++){
        if(a[i]+a[j]>0){
            arr1.push(a[i]+a[j])

        }
        else{
            arr2.push(a[i]+a[j])
        }
    }
 }
 let arr3=[]
 let postive=arr1.sort((a,b)=>a-b)
 let negative=arr2.sort((a,b)=>b-a)
 console.log(postive);
 console.log(negative);
 for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]+a[j]==postive[0]||negative[0]){
          arr3.push(a[i]+a[j])
        }}}
        console.log(arr3);
