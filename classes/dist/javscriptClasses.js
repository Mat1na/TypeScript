console.log("it's working!");
class Player {
  static description="Player in our game"
    #score=0 //Property '#score' is not accessible outside class 'Player' because it has a private identifier.Also you cannot change the value. that's why we create the functions getscore and updatescore
    numLives=10
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  //getters get+method
get fullName(){
  return `${this.first} ${this.last}`
}

  // getScore(){
  //   return this.#score
  // }

  get score(){
    return this.#score
  }

  //setters
  // updateScore(newScore){
  //   this.#score= newScore
  // }
  set score(newScore){
    if(newScore<0){
      throw new Error("Score must always be possitive")
    }
    this.#score= newScore
  }

  set fullName(newName){
    const [first ,last]=newName.split(" ")
    this.first = first;
    this.last = last;
  }
  
  taunt() {
    console.log("BOOYAH");
  }
  loseLife(){
    this.numLives -=1
  }
}

class AdminPlayer extends Player{
  constructor(first,last,powers){
    super(first,last) // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.powers=powers 
  }
  isAdmin=true
}
const admin= new AdminPlayer("admin","something",["delete","restore"])
console.log(admin);

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1);
console.log(player1.fullName); //out of the class we don't treat it like a method but as a property
player1.fullName="Amy Adams"
player1.loseLife()
// console.log(player1.getScore());
// console.log(player1.updateScore(28));
// player1.score=-3
player1.score=28
// console.log(player1.getScore());
console.log(player1.score);
console.log(player1);