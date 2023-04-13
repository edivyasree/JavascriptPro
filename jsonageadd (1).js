let a=[];
let sum=0;
var data = [{
    name:"Hello",
    age:20
    },
    {
    name1:"Hello1",
    age1:21
    },
    {
    name2:"Hello2",
    age2:22
    }]

data.forEach((a1)=>{
for(let values in a1){
    if(typeof a1[values]==="number"&&a1){
sum+=a1[values];
    }
    else{
        a.push(a1[values])
    }
}

})
a.push(sum)
console.log(a)
 
 
