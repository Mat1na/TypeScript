const dog={
    name: "	Elton",
    breed:"Australian Shepherd",
    age:0.5
}

function printName(person:{first:string, last:string}):void {
console.log(`${person.first}${person.last}`)
}
printName({first:"matina", last:"bampa"})


let coordinate:{x:number; y:number} = {x:34, y: 2}

function randomCoordinate():{x:number; y:number} {
    return {x:Math.random(), y:Math.random()}
}


//Type alias

type Point={
    x:number,
    y:number
}

let coordinate2:Point = {x:34, y: 2} //Instead of :{x:number; y:number} as type we specifily Point as type

// function doubleCoordinate(point:{x:number; y:number}):{x:number; y:number} {
//     return {x:point.x*2, y:point.y*2}
// }

function doubleCoordinate(point:Point):Point {
        return {x:point.x*2, y:point.y*2}
    }



    //Nested objects
    type Song={
        title:string,
        artist:string,
        numStreams:number,
        credits:{
            producer:string,
            writer:string
        }
    }
    
    const mySong:Song={
        title:"Unchained Melody",
        artist:"Righteous Brothers",
        numStreams:12457889,
        credits:{
            producer:"Phil Spector",
            writer:"Alex North"
        }
    }

function calculatePayout(song:Song):number{
return song.numStreams*0.0033
}  

function printSong(song:Song):void{
    console.log(`${song.title} - ${song.artist}`)
}

calculatePayout(mySong)
printSong(mySong)


// Optional properties

type prop={
    x:number;
    y:number;
    z?:number; //optional
}

const myProp:prop= {x:1, y:1, //z:1
};

//Readonly modifier
type User={
    readonly id:number;
    username:string;
}

const user:User = {
    id:123,
    username:"catgurl",
}
console.log(user.id) //no problem
// user.id = 0 //Cannot assign to 'id' because it is a read-only property meaning connot change




//Intersection type

type Circle={
    radius:number;
}

type Colorful={
    color:string;
}

type ColorfulCircle= Circle & Colorful

const happyFace: ColorfulCircle={
    radius:4,
    color:"yellow"
}


type Cat={
    numLives:number
}

type Dog={
    breed:string
}

type CatDog=Cat & Dog & {
    age:number
}