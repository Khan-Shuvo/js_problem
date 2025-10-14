let input = "javascript";

let result = (input) => {
      const element = new Array()
    for (let index = 0; index < input.length; index++) {

        if (index == 0 || index == input.length-1){
          element.push(input[index])
        };
        
    };
    return element;
}

console.log(result(input));