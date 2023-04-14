let str = "aaaabbbbcccc"
let count = 1, count1 = 1, count2 = 1, sum = 0;
for (let i of str) {
    if (str === "a") {
        count++;
    }
    else if (str === "b") {
        count1++;
    }
    else if (str === "c") {
        count2++;
    }
}
sum = count + count1 + count2;
console.log(count)


// let str1="aaabbbbbbbbcccdddd"
// var array = str1.split("");
// let j;
// for(i=0;i<array.length;i++){
// for(j=0;j<=i;j++)
//    if(array[j]<=array[i]){
//  var b=array[j];
//  array[j]=array[i];
//  array[i]=b
//    }
// }
// console.log(array)


const SortByLength = function (string) {

    const count = string.split('').reduce((a, b) => {

        a[b] ? a[b]++ : a[b] = 1;

        return a;

    }, {});
    const sortedString = Object.keys(count).sort((a, b) => {
        if (count[a] > count[b]) {

            return - 1;
        }
        if (count[a] < count[b]) {

            return 1;
        }
     return 0;

    });
    const str = sortedString.reduce((a, b) => {

        a += b.repeat(count[b]);

        return a;

    }, "");
    return str;

};

console.log(SortByLength('aaabbbbcccdddd'));