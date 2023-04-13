let a = [
    {
        name: "maonoj",
        group: [{ name: "vetntkat" },
        { name: "mouooli" },
        { name: "sai", group: [{ name: "Heoollo" }, { name: "Helolo1" }] }
        ]
    }
];
let arr = [], arr1 = [], sum = 0,b
function value(cal) {
    console.log(cal);
    for (let i in cal) {
        let a = cal[i];
        // console.log(cal[i])
        if (typeof a === "object") {
            value(a)
        }
        else if (typeof a === "string") {
            arr.push(a);
        }
     

    }
}
value(a);
console.log(arr)



