let str = ")()(())";
// let  count=0; 
// let count1=0;
// for(i=0;i<str.length;i++){

//    if(str[i]== '(')
//    {
//        count++;
//    console.log(count+"open braces");
//    }
//    else if(str[i]==')')
//    {
//     count1++;
//     console.log(count1+"closed braces" );
//    }

// }
// if(count==count1){
//     console.log("Correct")
// }
// else{
//     console.log("wrong")
// }
let count = 0, count1 = 0, count2 = 0;
if (str[0] == ')' || str.charAt(str.length - 1) == "(") 
{

    console.log("wrong Placed");

}
else {
    for (i = 0; i < str.length; i++) {

        if (str[i] == '(') {
            count++;
           
        }
        else if (str[i] == ')') {
            count1++;
           
        }


    }
}
console.log(count + "open braces");
console.log(count1 + "closed braces");
if (count == count1) {
    console.log("Correct")
}
else {
    console.log("wrong")
}
