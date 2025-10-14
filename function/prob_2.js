let input = "HeLLO";
let count = 0;

let result = (input) =>{
    for(cha of input){
        if(cha >= "A" && cha <= "Z"){
            count++
        };
    };
    return count
};

console.log(result(input));