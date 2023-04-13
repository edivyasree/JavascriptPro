function number(n) {
    for (let i of n) {
        if (i % 2 == 0) {
            console.log('1')
        }
        else if (i % 2 == 1) {
            console.log(i)
        }
        else if (Math.sign(-i||0)) {
            console.log('-1')
        }
    }

}
number([3, 2, 3, 1, 4, 5, 6, 2, , 8, 9, 7, 19, -1, -3, -6, -3,]);