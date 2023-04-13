function displayName(){
var student={
        fname:'shirisha',
        lname:'reddy',
        age:25,
        location:'srd',
        qualification:'Boomi Developer',
        Address:{
            hno:1000,
            hloc:'srd',
            hstate:'Telangana',
            hcountry:'India'
        }
    }
    document.writeln("FirstName:" + student.fname + "<br>");
    document.writeln("LastName:" + student.lname + "<br>" );
    document.writeln("Age:" + student.age + "<br>");
    document.writeln("Location:" + student.location + "<br>");
    document.writeln("Qualification:" + student.qualification + "<br>");
    document.writeln("Address:" + student.Address.hno + "<br>");
    document.writeln("location:" + student.Address.hloc + "<br>");
    document.writeln("State:" + student.Address.hstate + "<br>");
    document.writeln("Country:" + student.Address.hcountry);
}
displayName();