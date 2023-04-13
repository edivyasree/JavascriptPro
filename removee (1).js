let arr = 'DivyaSree';

function str1(str, cha){
    var newStr = "";
   
    
    for(let i=0;i<=str.length-1;i++){
        var name = str[i];
        for(let e=0; e<=str[i].length-1; e++){
            
            if(name[e] != cha){
                newStr += name[e];
            }

        }

        newStr += ''; 
    }
    console.log(newStr);
}

str1(arr,'r');