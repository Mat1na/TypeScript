// Type annotations

let movieTitle: string="Amadeus"
movieTitle="Arrival"

let numCatlives: number=9

let gameOver: boolean=false
gameOver=true

//Type inference
let x=27
    // x="number" //Type 'string' is not assignable to type 'number'

let a =true
    // a=15  //Type 'number' is not assignable to type 'boolean'



// The Any Type 


let thing: any ="hello"
thing=1
thing=false
thing.toUpperCase()
thing()
