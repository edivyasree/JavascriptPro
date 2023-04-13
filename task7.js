let a = [{

    name: "abc",

    age: 3,

    subject: [

        {

            name: "def",

            age: 4,

            data: [

                {

                    name: "fgh",

                    age: 5

                },

                {

                    name: 'sir'

                }]

        }]

}]
let arr=[],arr1=[] ,sum=0
function value(cal) {
    for (let i in cal) {
        let a = cal[i];
    
    if(typeof a==="object"){
        value(a)
  
    }
    else if(typeof a==="number"){
        sum+=a;
    }
    else if(typeof a==="string"){
        arr.push(a);
      }
    
}
}
value(a);
arr.push(sum)
console.log(arr)
