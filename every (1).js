// const ages = [32, 33, 16, 40];
// above=ages.every(checkages);
// console.log(above);
// function checkages(ages){
//     return ages >18;
    
// }


// const language = ['JavaScript', 'Java']; language.length = 0; console.log(language[0]);

// let str = "ldellboomi";
// let count=0,count1=0,count2=0,count3=0,count4=0,count5=0,count6=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=='d'){
//     count++;
//     }
//     else if(str[i]=='e'){
//     count1++;
// }
// else if(str[i]=='l'){
//     count2++;
// }
// else if(str[i]=='b'){
//     count3++;
// }
// else if(str[i]=='o'){
//     count4++;
// }
// else if(str[i]=='m'){
//     count5++;
// }
// else if(str[i]=='i'){
//     count6++;
// }
// }

// console.log('d->'+count,'e->'+count1,'l->'+count2,'b->'+count3,'o->'+count4,'m->'+count5,'i->'+count6);


let str="Divya Sree"
let str1 = str.toLowerCase()
let str2 = '';
for(let i of str1){
    if(i === ' '){

    }else{
        str2 = str2+i
    }
}
let obj = {};
for(let i of str2){
   obj[i] = (obj[i]||0)+1
}
console.log(obj);
