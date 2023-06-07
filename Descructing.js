let obj = {
    name: "hello",
    name1: "hello1",
    name2: "hello3",
    name3: [{
        name4: {
            name5: {
              name6: {
                   name7: "hello4"
                },
                name8: [{
                    name9: "hello5",
                    name10: {
                        name11: 'hello6'
                 }
                }]
            }

        }
    }]

}




// const testObject = {
//     firstname: "Bob",
//     lastname: "Weichler"
//   };
//   const a = testObject;
//   const { firstname } = testObject;
//   console.log(a);           
//   // a => {firstname: "Bob", lastname: "Weichler"}
//   console.log(firstname);
//   // firstname => Bob
  
  const{name,name1,name2,name3}=obj;
  console.log(name1,name2,name,);
let [x]=name3
let{name4}=x
let{name5}=name4
let{name6,name8}=name5
let {name7}=name6
console.log(name7)
let [y]=name8;
// let{name8}=name9;
let{name9,name10}=y;
let{name11}=name10
console.log(name9,name11);


