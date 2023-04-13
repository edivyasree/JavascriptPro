
// //     let current = 5;
  
// //     function go() {
// //       console.log(current);
// //       if (current == 100) {
// //         clearInterval(timerId);
// //       }
// //     current++
// //     }
// //   go();
// //     let timerId = setInterval(go, 1000);



//  const Every2Sec = (n)=>{

//     for (let i = 1; i <= n; i++) {

//         setTimeout( () =>{

//           console.log(i)

//         },  i*2000,i+1)

//       }

//   }

//   Every2Sec(100);


/*package whatever //do not write package name here */

printNos(5, 100);
	
function printNos(initial, last)
{
    setTimeout( () =>{
    if (initial <= last) {
        console.log(initial + "");
        printNos(initial + 5, last);
    }
}, i*2000)

}


// This code is contributed by shivanisinghss2110
