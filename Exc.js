let str = ["ex1.html", "ex1.js", "ex2.html", "ex2.js"];

let arr=[],arr1=[]
for(let i of str){
    console.log(i);
    if(i=="ex1.html" ||i=="ex2.html"){
        arr.push(i)
    }
    else{
arr1.push(i)
    }
}
console.log(arr,arr1);





// let str1=[]


// str1.push(str.includes('.html'))
// console.log(str1);

