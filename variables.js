// Type annotations
var movieTitle = "Amadeus";
movieTitle = "Arrival";
var numCatlives = 9;
var gameOver = false;
gameOver = true;

//Type inference
var x = 27;
// x="number" //Type 'string' is not assignable to type 'number'
var a = true;
// a=15  //Type 'number' is not assignable to type 'boolean'


// The Any Type
var thing = "hello";
thing = 1;
thing = false;
thing.toUpperCase();
thing();
