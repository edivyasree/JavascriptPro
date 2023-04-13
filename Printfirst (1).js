let a="Divya Sree";

let b=a.split(" ");

let str="";

b.map((e)=>{

  let firstletter=e[0];

  str+=firstletter;

 }

)

let result=str.split("").join(".");

console.log(result);