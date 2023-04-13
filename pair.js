function cntgloves(arr, n)
{

    arr.sort();
    console.log(arr);
    let temp = 0;
    let i = 0;

    while (i < n) {
        
        let number = arr[i];
        let count = 1;
        i++;

        if(i < n && arr[i] == number) {
            count++;
            i++;
        }
        
            if (count >= 2) {
            temp = temp + Math.floor(count / 2);
        }
    }
    return temp;
}
    let arr = [9, 10, 20 ,20, 10, 10, 30, 50, 10, 20];
    // let arr=[4 ,2 ,3, 4, 1]

    let n = arr.length;


console.log(cntgloves(arr, n));



