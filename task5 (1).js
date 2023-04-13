// let str1=""
// let str=" ";
let perDetails = [
   {
      "name":"venkat",
      "personalDetails":{
         "studyDetails":[
            {
               "graduation":"Be",
               "persentage":70
            },
            {
               "secondhighetqualification":"Intermediate",
               "persentage":90
            },
            {
               "ssc":10,
               "persentage":85,
               "subjectsandpersentage":{
                  "maths":70,
                  "english":100
               }
            }
         ]
      }
   }
]
// for(let i in perDetails.studyDetails){
//    str+=""+perDetails.studyDetails[i].persentage
//   for(let j in perDetails.studyDetails[i].persentage[j]){
//   str1=perDetails.studyDetails[i].persentage[j]
//   } 

// }
// console.log(str1)

let arr=[],sum=0
function value(cal){
   for(let i in cal){
let a=cal[i]
if(typeof a=="object"){
   value(a)
}
else if(typeof a=="string"){
   arr.push(a)
}
else if(typeof a=="number"){
   sum+=a
}
   }
}
value(perDetails)
// console.log(arr);
console.log(sum);
