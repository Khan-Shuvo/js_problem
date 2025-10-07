let input = "abc123xyx43"
let arry = [1,2,3,4,5,6,7,8,9,0];

// console.log(input.split(""))
let count= 0;
for (cha of input.split("")){
    // if (arry.includes(Number(cha)) ){
    //     count++
    // }
    if (cha>=0 && cha<=9){
        count++
    }


};
console.log(count);