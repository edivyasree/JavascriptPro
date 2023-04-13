let a={
    name:"Divya",

sub:{
    marks:90
}
}
let arr={},arr1=[],sum;
function value(cal){
for(i in cal){
    let a=cal[i];
    // console.log(cal[i])
    if(typeof a==="Object"){
        value(a)
  
    }
   else (
    arr[i]=cal[i]
   )
    
}
}
value(a);
console.log(arr);