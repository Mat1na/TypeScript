//Interfaces serve alsmost the same purpose as aliases

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 0, y: 0 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi: () => string; //method
  sayHi(): string; //method
}

const Thomas: Person = {
  id: 5454544,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: () => {
    return "Hello";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes:Product={
    name: "addidas",
    price: 100,
    applyDiscount(amount: number) {
      const newPrice= this.price*(1-amount);
      this.price=newPrice;
      return this.price;
    }
}

console.log(shoes.applyDiscount(0.4))



// You can add nen properties in Interfaces for instance if they come from another library/file

interface  Dog{
    name:string;
   age:number 
}


interface  Dog{
    breed:string;
   bark():string
}

const elton:Dog = {
    name: "Elton",
    age:0.5,
    breed:"Australian",
    bark(){
        return "Woof Woof";
    }
}

//we use extends in order for an interface to inherit types from another interface
interface ServiceDog extends Dog{
  job:"drug sniffer" | "bomb" |"guide dog"
}

const chewy:ServiceDog = {
  name: "Chewy",
  age:4.5,
  breed:"Lab",
  bark(){
      return "Woof Woof"
  },
  job:"guide dog"
}

//multiple interface

interface Pers{
  name:string;
}
interface Employee{
  readonly id:number;
  email:string;
}

interface Engineer extends Pers,Employee{
  level:string;
  languages:string[];
}



//type aliases vs interface

//*******interface can ONLY describe the shape of an object
//*******We can reopen interfaces and addon
//*******You can use extends with interface with type aliases you can use intersection types and & e.g type Person = Name & {
 // age:number}