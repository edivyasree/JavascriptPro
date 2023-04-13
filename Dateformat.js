array_Clone = function(arra1) {
    return arra1.slice(1);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));