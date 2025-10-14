let input = 4;

let facto = (n) =>{
    if(n===0) return 1;
    return input*facto(input-1);
}

console.log(facto(input))