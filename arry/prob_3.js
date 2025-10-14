let arr = [10, 40, 30];
let smallest = (arry) => {
    let small = arry[0];
    for (num of arry) {
        if (num < small) {
            small = num;
        };
    } return small;
}

console.log(smallest(arr))