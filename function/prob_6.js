let number = 396425;

let smallestDigit = (input)=>{
    let digit = input.toString().split("")

    let smallDigit = Number(digit[0]);

    for(num of digit){
        num = Number(num);
        if (smallDigit>= num){
            smallDigit = num ;
        };
    };
    return smallDigit
}

console.log(smallestDigit(number))