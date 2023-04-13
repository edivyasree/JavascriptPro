//  var v = [];
//  var v1=[]; 
//       var str = "Helloworld" 
//       var t = str.split("");
//       for (var i = 0; i < t.length; i++) { 
//          if ((i % 3) == 2) { 
//             v.push(t[i - 2].concat(t[i - 1])); 
//          } 
        
//       } 
//       console.log(v)
//       console.log(v1)



   function stringsplit(str,size)
   {
    if(str==null)
    return[];
    else if(str=String(str))
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
   }
   console.log(stringsplit('Helloworld'));
   console.log( stringsplit('Helloworld',2));
   console.log(stringsplit('Helloworld',4)); 


   