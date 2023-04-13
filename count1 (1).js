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