let age: number | string = 21
age = 24
age = "24"


type Point = {
    x: number,
    y: number,
}

type Loc = {
    lat: number,
    lng: number,
}

let coords: Point | Loc = { x: 1, y: 0, }
coords = { lat: 454.54, lng: 0 }

function printAge(age: number | string): void {
    console.log(`Tou are ${age} years old`)
}


function calcTax(price: number | string, tax: number) {
    // return price*tax //The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type

    if (typeof price == "string") {
        price.replace("$", "")
        return parseFloat(price) //The parseFloat() function parses a string argument and returns a floating point number.
    }
    return price * tax


}

const stuff:any[]=[12,2,3, true, "name",{}] //better to avoid type any though

//** IMPORTANT

// const things: number | string[] // whithout the parenthesis its a number OR an array of strings
// const things: number[] | string[] // whithout the parenthesis its an array number OR an array of strings

const things: (number | string)[] = [12,2,'das'] // this is an array of strings or numbers or both

const coordinates:(Point | Loc)[] = []
coordinates.push ({ lat: 454.54, lng: 0 })
coordinates.push({ x: 0, y:5})

