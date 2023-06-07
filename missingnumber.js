const input = ["1", "8", "5","10"];
let arr1=[]
input.map((e,i)=>{
   arr1.push(parseInt(e))
})
console.log(arr1);
const arr=arr1.sort((a, b) =>{return a-b})
console.log(arr);
let arr2=[]
for(i=1;i<=11;i++){
    if(arr.indexOf(i)===-1){
        arr2.push(i)
    }
}
console.log(arr2);