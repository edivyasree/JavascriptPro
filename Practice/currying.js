///currying///

function add(){
    let a=1;
    let b=2;
    return a+b;
}
add()
const add1=add()
console.log(add1);


// --------------------------------
function multiply(a) {
    return function(b) {
      return a * b;
    }
  }
  
  const double = multiply(2);
  console.log(double(5)); 
  