let arr = [{

    "name": "venakt",

    "age":26,

    "number":123,

    "friends":"lot many",

    "girlfrientsList":"notFound",

    "location":"molkapatnam",

    "salary":"less",

    "height":"5.5",

    "wight":"60kg",

    "domain":"frontEnd",

    "strongIn":"flirting",

    "weaknIn":"controlingEmotions",

    "experience":"1.5years",

    "currentLocation":"hyd"

},

{

    "name": "vinay",

    "age":26,

    "number":1234,

    "friends":"lot many",

    "girlfrientsList":"NearTo 1000 Members family",

    "location":"hydrebad",

    "salary":"medium",

    "height":"5.6",

    "wight":"70kg",

    "domain":"frontEnd",

    "strongIn":"controlingEmotions",

    "weaknIn":"flirting",

    "experience":"1.5years",

    "currentLocation":"hyd"

},

{

    "name": "kalyan",

    "age":29,

    "number":12345,

    "friends":"limited",

    "girlfrientsList":"notFound",

    "location":"hydrebad",

    "salary":"less",

    "height":"5.11",

    "wight":"100kg",

    "domain":"frontEnd",

    "strongIn":"crackingJokes",

    "weaknIn":"controlingEmotions",

    "experience":"1.5years",

    "currentLocation":"hyd"

}

]
// Required output is: [

//     {

//       name: 'venakt',

//       age: 26,

//       number: 123,

//       location: 'molkapatnam',

//       salary: 'less',

//       domain: 'frontEnd'

//     },

//     {

//       name: 'vinay',

//       age: 26,

//       number: 1234,

//       location: 'hydrebad',

//       salary: 'medium',

//       domain: 'frontEnd'

//     },

//     {

//       name: 'kalyan',

//       age: 29,

//       number: 12345,

//       location: 'hydrebad',

//       salary: 'less',

//       domain: 'frontEnd'

//     }

//   ]
let arr1=JSON.stringify(arr,["name","age","number","location","salary","domain"])

let arr2=JSON.parse(arr1)
console.log(arr2)