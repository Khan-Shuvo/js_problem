let random = () =>{
   let num = Math.floor(Math.random()*100)
    if (num%2 !== 0){
        console.log(`Random odd numbr ${num}`)
    }
}

random()