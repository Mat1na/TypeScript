function square1(num) {
  //parameter type any avoid it
  return num * num;
}

function square2(num: number) {
  //parameter type number
  return num * num;
}

square2(3);

function greet(person: string = "stranger") {
  //type string  "stranger" for default if you provide no name"
  return `hi there ${person}!`;
}

greet(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'
greet(3); //Argument of type 'number' is not assignable to parameter of type 'string'.
greet("Mike");

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("Mike", 20, true);

//Return types

function square(num: number): number {
  //parameter type number
  num * num;
} //2nd :number is to define what should be returnd. ONLY this way you get the error thet you are missing return key word
//A function whose declared type is neither 'void' nor 'any' must return a value

square(3);

function rando(num: number) {
  //function rando(num: number): string | number
  if (Math.random() < 0.5) {
    return num.toString(); // return the string e.g "7"
  }
  return num; // return the number 7
}

// Anonymous functions
const colors = ["red", "yellow", "blue"];

colors.map((color) => {
  //(parameter) color: string
  return color.toUpperCase();
});

//The type void

function prinTwice(msg: string): void {
  //function prinTwice(msg: string): void
  console.log(msg);
  console.log(msg);
  return ""; // Type 'string' is not assignable to type 'void'
}

//The never type
function makeError(msg: string): never {
  return msg; //gives an error because never anottation never returns anything.Type 'string' is not assignable to type 'never'
  throw new ErrorEvent(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game loop is running");
  }

  return true; //Type 'boolean' is not assignable to type 'never'.
}
