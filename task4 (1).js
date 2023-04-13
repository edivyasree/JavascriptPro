let a=[];
let sum=0;
function findsum(strr)
{

    for(value in strr){
        if(typeof strr[value]=='string'){
            a.push(strr[value])
        }
    }
    a.map(e=>{
        let ad=e.split('')
        for(i=0;i<ad.length;i++){
            if(parseInt(ad[i])){
                sum=sum+parseInt(ad[i])
            }
        }
    })


}
let str=['Hello','Hello1','Hello2',25]
findsum(str)
console.log(sum);

 



