let str="15122"
const len=str.length
for(let i=0;i<str.length/2;i++){
    // console.log(str[i],"dfghjjhgfd");
    // console.log(str[str.length-1-i],"tjhgfd");
    // console.log(str.length-1-i,i);
    if(str[i]!==str[str.length-1-i]){
       
        console.log("not palindrome");

    }
    else{
    console.log("It is palindrome"); 
    }
}


// function checkPalindrome(str) {  
     
//     const len = str.length;  
    
//     for (let i = 0; i < len / 2; i++) {  
//  if (str[i] !== str[len - 1 - i]) {  
//           console.log( 'It is not palindrome'); 
//           return;
//         }  
//     }  
//     console.log( 'It is a palindrome');  
// }  
  
// const string = "121" 
  
// const value = checkPalindrome(string);  


