let num = 1234;

let sum = 0;

function sametion(num){
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    console.log(sum);
}

sametion(num);