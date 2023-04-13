const arr1 = [1,2,3];
const arr2 = [100,2,1,10];
const difference = (first, second) => {
   const res = [];
   for(let i = 0; i < first.length; i++){
      if(second.indexOf(first[i]) === -1){
         res.push(first[i]);
        //  console.log(res.push(first[i]),'*******************');
      }
   };
   for(let j = 0; j < second.length; j++){
      if(first.indexOf(second[j]) === -1){
         res.push(second[j]);
        //  console.log( res.push(second[j]),'&&&&&&&&&&&&&&&&');
      };
   };
   return res;
};
console.log(difference(arr1, arr2));


