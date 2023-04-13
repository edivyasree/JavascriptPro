const input = ["1", "5", "8", "10"];
const arr = []
for (i = 0; i < input.length; i++) {
    arr.push(parseInt(input[i]))
}
console.log(arr);

function missingcha(arr, n) {

    let diff = arr[0] - 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] - i != diff) {

            while (diff < arr[i] - i) {

                console.log((i + diff) + "")
                diff++;
            }
        }
    }
}

let n = arr.length;
missingcha(arr, n);