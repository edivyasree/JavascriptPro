function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                //  data.forEach((e, i) => {
                //     let obj = {
                //         UserId: e.id,
                //         title: e.title,
                //         body: e.body
                //     }
                //     arr.push(obj);

                //     let vow = "aeiou";
                //     //let sent="welcome to this beautiful world";
                //     let title = obj.title;

                //     let arr1 = title.split(' ');
                //     let arr2 = []

                //     arr1.forEach(data => {
                //         if (vow.indexOf(data[data.length - 1]) > -1) {
                //             arr2.push(`${data}/`)
                //         } else {
                //             arr2.push(`${data}-`)
                //         }
                //     })


                //     let arr3 = (arr2.map(arr3 => (arr3.split("").reverse().join(""))))
                //     console.log(arr3);

                // });                                 //console.log(arr.map(e => e.split("").reverse().join("")));
                // console.log(arr);
            })
    },1000);
    console.log("namaste javascript");
}
x();
    