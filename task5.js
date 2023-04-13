let str1=""
let str=" ";
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
for(let i in perDetails.studyDetails){
   str+=""+perDetails.studyDetails[i].persentage
  for(let j in perDetails.studyDetails[i].persentage[j]){
  str1=perDetails.studyDetails[i].persentage[j]
  } 

}
console.log(str1)