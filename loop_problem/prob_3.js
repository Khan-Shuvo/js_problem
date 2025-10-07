let word = "programing";

let vowels = ["a","e","i","o","u"];

let coun = 0;

for (cha of word){
    // console.log(cha)
    if(vowels.includes(cha)){
        coun++
    }
}

console.log(coun)
