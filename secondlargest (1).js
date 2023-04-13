const input = ["1", "5", "8", "10"];
const arr = []
const k=[]
for (i = 0; i < input.length; i++) {
    arr.push(parseInt(input[i]))
}
// console.log(arr);
function secondlargest(arr,n){
for(i=0;i<n;i++){
    for(j=i-1;j<n;j++){
        temp=0;
        if(arr[i]<arr[j-1]){
            temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        }
    }
console.log(arr[0]+"")

}

}
let n=arr.length;
secondlargest(arr,n);