let arr = [{

    "name": "venkat",
    "age": 26,
    "number": {
        "friends": "lot many",
        "girlfrientsList": "notFound",
        "location": "molkapatnam",
        "salary": "less",
        "height": "5.5",
    },
    "weight": "60kg",
    "domain": "frontEnd",
    "strongIn": "flirting",
    "weaknIn": "controlingEmotions",
    "experience": "1.5years",
    "currentLocation": "hyd"
},

{
    "name": "vinay",
    "age": 26,
    "number": {
        "friends": "lot many",
        "girlfrientsList": "NearTo 1000 Members family",
        "location": "hydrebad",
        "salary": "medium",
        "height": "5.6"
    },
    "weight": "70kg",
    "domain": "frontEnd",
    "strongIn": "controlingEmotions",
    "weaknIn": "flirting",
    "experience": "1.5years",
    "currentLocation": "hyd"
},

{

    "name": "kalyan",
    "age": 29,
    "number": {
        "friends": "limited",
        "girlfrientsList": "notFound",
        "location": "hydrebad",
        "salary": "less",
        "height": "5.11"
    },
    "weight": "100kg",
    "domain": "frontEnd",
    "strongIn": "crackingJokes",
    "weaknIn": "controlingEmotions",
    "experience": "1.5years",
    "currentLocation": "hyd"

}];

// let arr1 = JSON.stringify(arr, ["name", "age", "number", "location", "salary", "domain"])

// let arr2 = JSON.parse(arr1)
// console.log(arr2)
// let arr3=[]
// for(let i of arr){
//  for(let j in i){ 
//     // console.log( j,i[j]);   
//     if(typeof(i[j])=="object" ){
//         let a={
//             ...i,...i[j]
//         }
//         arr3.push(a)
//     }
//  }  
// }
// let arr4=[]

// arr3.map((data)=>{
//     let obj={
//         name:data.name,
//         age:data.age,
//         location:data.location,
//         salary:data.salary,
//         domain:data.domain
//     }
//     arr4.push(obj)
// })
// console.log(arr4);

let arr1 = []
for(let i of arr){
    let obj = {} ;
    for(let j in i){
        if(typeof i[j] == 'object'){

            let value = i[j];
            for(let k in value){
                if(k == 'name' || k == 'age' || k == "salary" || k == 'location' || k == 'domain'){
                    obj[k] = value[k]   
                }
            }
        }else if(j == 'name' || j == 'age' || j == "salary" || j == 'location' || j == 'domain'){
            obj[j] = i[j];
        }
    }
   arr1.push(obj)
}
// console.log(arr1);
    