let arr = [10,40,30];
let largest = (arry) =>{
    let larg = arry[0];
    for(num of arry){
        if(num>larg){
            larg = num;
        };
    } return larg;
}

console.log(largest(arr))