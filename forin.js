const person={fname:"john",lname:"Doe",age:25}
let txt=" ";
for(property in person)
{
    txt+=person[property]+":";
}
console.log(txt);
console.log(person.fname);
