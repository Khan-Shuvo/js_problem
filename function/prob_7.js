let input = "abc123xyz";
let result = "";
for (cha of input.toLocaleLowerCase()){
    if(cha>="a" && cha<="z"){
        result+= cha
    }
}
console.log(result)