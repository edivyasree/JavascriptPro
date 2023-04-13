const user_details = [
  {
    id: 1,
    name: "sravan",
    primary_key: 11
  },
  {
    id: 2,
    name: "akhil",
    primary_key: 35
  },
  {
    id: 3,
    name: "raju",
    primary_key: 2
  },
  {
    id: 4,
    name: "arun",
    primary_key: 9
  }
];
const contact_list = [
  {
    id: 11,
    contact: 850054545,
    age: 25,
  },
  {
    id: 2,
    contact: 850054545,
    age: 40,
  },
  {
    id: 35,
    contact: 850054545,
    age: 21,
  },
  {
    id: 9,
    contact: 850054545,
    age: 33,
  },
]
// let arr = []
// let arr1 = [...user_details, ...contact_list]
// console.log(arr1);
// for (let i of arr1) {
//   if (user_details.primary_key === contact_list.id || user_details.name === "raju") {
//     console.log(i.age, i.name)

//   }
// }


// let name_person="arun"
// for(let i of user_details){
//    if(i.name==name_person){
//     for(let j of contact_list){
//       if(i.primary_key==j.id){
//         console.log(j.age)
//       }
//     }
//    }
// }



// if(user_details.primary_key===contact_list.id){
// const arr=contact_list.age;
// console.log(arr);
// }


const result=user_details.find(({name})=>name==="arun")
console.log(result)
const result1 = contact_list.find(({ id }) => id === result.primary_key);
console.log("age:"+result1.age+ "name:"+result.name);