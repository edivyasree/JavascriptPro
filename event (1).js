let child=document.getElementById('child')
child.addEventListener('click',()=>{
    console.log("child clicked")
},true
)
let event1=document.getElementById('event1')
event1.addEventListener('click',()=>{
    console.log("Event1 clicked")
},true
)
let parent=document.getElementById('parent')
parent.addEventListener('click',()=>{
    console.log("parent   clicked")
},true
 )
// let a=[
//     {
//         name:"manoj",
//         education:"B.E"
//     },
//     {
//         name:"Divya",
//         education:"B.tech"
//     },
//     {
//         name:"ddhgd",
//         education:"ddd"
//     }

// ]
// a[index]
// <div>
//     {
//         a.map(value,index)=>{
//             <tr onClick={clicked}>
//                 <td>{value.name}</td>
//             <td>{value.name}</td>
//             <td>{value.education}</td>
//             </tr>
//         }
//     }
//     </div>