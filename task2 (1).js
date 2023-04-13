var data1 = {

   name: "Hello",

   data2: [{

      name: "Hello1",

      age1: 21

   }, {

      name1: [{

         name2: "Hello2",

         age2: 22

      }]

   }],

   age: 20

}

// let a = data1.age;

// let b = data1.data2[0].age1;

// let c = data1.data2[1].name1[0].age2;

// let output = a + b + c;

// console.log(output);
let arr=[],sum=0
function value(cal){
   for(let i in cal){
      let a=cal[i]
      if(typeof a =="object"){
         value(a);
      }
      else if(typeof a=="string"){
         arr.push(a)
      }
      else if(typeof a=="number"){
         sum+=a
      }
   }

}
value(data1)
console.log(arr);
console.log(sum);