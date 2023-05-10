let arr=["AAA","MANGO","TREE","AAA"]

let arr1=arr.map((e)=>{
   let b= e.split()
       console.log(b);
      b.map((e)=>{
    if(e.length%2==0 ){
        console.log(e);
    }                                                                           
   
      })
})

// console.log("3"-"2"+1)