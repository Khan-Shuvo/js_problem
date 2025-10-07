let sentence = "I love bangladesh and their people";

let arry = sentence.split(" ");

// console.log(arry)

let longest_word = '';

for (let i = 0; i < arry.length - 1; i++) {

    if (arry[i].length >longest_word.length){
        longest_word = arry[i]
    }

}

console.log(longest_word)