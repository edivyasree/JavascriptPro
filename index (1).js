//chainging elements
// Array elements are accessed using their index number
// Array indexes start with 0:, [0] is the first array element, [1] is the second, [2] is the third ...
const cars = ["Ford", "Maruti Suzuki",1,2,3,4,5, "Toyota", "Hyundai"];
cars[2] = "value";
console.log(cars);//Here a[0] ford is replaced and displayed.
cars.forEach((data,index)=>{
    if(data=="value")
{
    console.log(cars);
    // cars[index]='name';
    console.log(index);
    // console.log(cars);
    // cars[index]='value';
    // console.log(cars);
}})