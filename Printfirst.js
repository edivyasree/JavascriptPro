let a="Divya Sree";

let b=a.split(" ");
console.log(b);

let str="";

b.map((e)=>{

  let firstletter=e[0];
console.log(firstletter);
  str+=firstletter;
  // console.log(str);

 }

)

let result=str.split("").join(".");

console.log(result);