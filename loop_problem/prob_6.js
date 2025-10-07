let input = "ma";

let output = "";

for (let i = input.length-1;i>=0; i--){
    output += input[i]
}

console.log((input === output)?"It's an Palindrome": "It's not an Palindrome");
