let arraysOfObjects = [

    {age: 40, value : 50},

    {age: 50, value: 50},

    {age: 60, value: 50}

]
var sum=0;
for(arr1 in arraysOfObjects){
   console.log(arraysOfObjects[arr1].value)
   let b=arraysOfObjects[arr1].value;
   sum+=b;
   
    }
    console.log(sum)
