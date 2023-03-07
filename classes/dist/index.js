"use strict";
var _Player_score;
console.log("it's working!");
// public keyword available anywere
// private available only in the class it's defined
// protected in available also in children classes
class Player {
    constructor(first, last) {
        _Player_score.set(this, 0);
        this.score2 = 0;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("secret method");
    }
}
_Player_score = new WeakMap();
var elton = new Player("Elton", "Steele");
// console.log(elton.score)
// elton.first="matina" //Cannot assign to 'first' because it is a read-only property
// elton.secretMethod() //Property 'secretMethod' is private and only accessible within class 'Player'
//short
class PlayerShort {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secret method");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        // this._score //Property '_score' does not exist on type 'SuperPlayer'
    }
}
var mike = new PlayerShort("Mike", "Steele", 10);
console.log(mike);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike("red");
class Jacket {
    constructor(bland, color) {
        this.bland = bland;
        this.color = color;
    }
}
const jacket1 = new Jacket("prada", "black");
//abstract classes
//Cannot create an new instance with abstract class
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("hello");
    }
}
class FullTimmeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
const betty = new FullTimmeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const matina = new FullTimmeEmployee("Matina", "White", 95000);
console.log(matina.getPay());
