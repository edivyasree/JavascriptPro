const squareSumRecursively = (n, res = 0) => {
   if(n){
      return squareSumRecursively(Math.floor(n/10), res+Math.pow((n%10),2));
   };
   return res;
};
const isHappy = (num, map = {}) => {
   if(num !== 1){
      if(map[num]){
         return false;
      }
      map[num] = 1;
      return isHappy(squareSumRecursively(num), map);
   };
   return true;
}
console.log(isHappy(67));
console.log(isHappy(89));
console.log(isHappy(139));
console.log(isHappy(1327));
console.log(isHappy(2871));
console.log(isHappy(3970));
