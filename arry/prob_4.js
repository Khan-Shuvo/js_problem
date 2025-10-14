let arr = [1, 2, 3, 4, 6];

let even = (arry) => {
    let count = 0;
    for (i of arry) {
        if (i % 2 === 0){
            count++
        };
    };
    return count
};

console.log(even(arr))