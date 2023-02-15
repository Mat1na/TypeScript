console.log("it's working!");
class Player {
    #score=0 //Property '#score' is not accessible outside class 'Player' because it has a private identifier.Also you cannot change the value. that's why we create the functions getscore and updatescore
    numLives=10
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getScore(){
    return this.#score
  }
  updateScore(newScore){
    this.#score= newScore
  }
  taunt() {
    console.log("BOOYAH");
  }
  loseLife(){
    this.numLives -=1
  }
}

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1);
player1.loseLife()
console.log(player1.getScore());
console.log(player1.updateScore(28));
console.log(player1.getScore());

const player2 = new Player("Charlie", "Brown");
player1.taunt();
console.log(player2);
