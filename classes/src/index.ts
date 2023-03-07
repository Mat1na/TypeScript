console.log("it's working!");

// public keyword available anywere
// private available only in the class it's defined
// protected in available also in children classes

class Player {
  readonly first: string;
  last: string;
  #score: number = 0;
  private score2: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }
  private secretMethod(): void {
    console.log("secret method");
  }
}

var elton = new Player("Elton", "Steele");
// console.log(elton.score)
// elton.first="matina" //Cannot assign to 'first' because it is a read-only property
// elton.secretMethod() //Property 'secretMethod' is private and only accessible within class 'Player'

//short

class PlayerShort {
  constructor(
    public first: string,
    public last: string,
    private _score: number
  ) {}

  private secretMethod(): void {
    console.log("secret method");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    // this._score //Property '_score' does not exist on type 'SuperPlayer'
  }
}
var mike = new PlayerShort("Mike", "Steele", 10);
console.log(mike);
// mike.score=-10;

//Classes with interfaces

interface Colorful {
  color: string;
}
class Bike implements Colorful {
  constructor(public color: string) {}
}
const bike1 = new Bike("red");

class Jacket implements Colorful {
  constructor(public bland: string, public color: string) {}
}

const jacket1 = new Jacket("prada", "black");

//abstract classes

//Cannot create an new instance with abstract class

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("hello");
  }
}

class FullTimmeEmployee extends Employee {
  constructor(public first: string, public last: string, private salary:number) {
super(first,last)
  }
  getPay(): number {
    return this.salary;
  }
}

const betty=new FullTimmeEmployee("Betty","White",95000)
console.log(betty.getPay())

const matina = new FullTimmeEmployee("Matina", "White", 95000);
console.log(matina.getPay());