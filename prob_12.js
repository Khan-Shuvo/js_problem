let input = Number(prompt("enter a number"))

let oparetor = prompt("enter a oparetor for calculetion")

let input_2n = Number(prompt("entr another number for the result"))

document.getElementById("demo").innerHTML= eval(input + oparetor + input_2n)