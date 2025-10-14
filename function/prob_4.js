let input = 6;

let result = (input) => {
    if(input <= 0) return console.log("it's a negative number");

    for (let index = 2; index <= Math.sqrt(input); index++) {
        
        if(input%index === 0 ){ return console.log("this not a prime number")};
    };
    return console.log("it's a prime number");
};

console.log(result(input))
console.log(result(5))
console.log(result(20))
console.log(result(7))
