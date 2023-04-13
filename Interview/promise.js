let promise = new Promise((resolve, reject) => {
    let str = "Divya"
    let str1 = "fghjivya"
    if (str == str1) {
        resolve("Success")
    }
    else 
    {
        reject("failure")
    }
})
promise.then((e) => {
    console.log(e,"wafgjk");
})
    .catch((e) => {
        console.log(e);
    })

//----------------------------------------------------------------------------------------------------------------


    // let myFirstPromise = new Promise((resolve, reject) => {
    //     setTimeout(function(){
    //     resolve("Success!");
    //     },10000);
    //     });
        
    //     myFirstPromise.then((successMessage) => {
    //     console.log("Yay! " + successMessage);
    //     });


    // let mypromise=new Promise((resolve,reject)=>{
    //     let a=10,b=20;
    //     if(a>b){
    //         resolve("Success")

    //     }
    //     else
    //     {
    //         reject("failure")
    //     }
    // })
    // mypromise.then((e)=>{
    // console.log(e);
    // })
    // .catch((e)=>{
    //     console.log(e);
    // })