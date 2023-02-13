const activeUsers:string[] = [];
activeUsers.push("Tony");

const Users:any[] = [];

const ageList: number[] = [45,46,52];

ageList[0] = 99;
// ageList[0] = "99";//Type 'string' is not assignable to type 'number'

//Array types

// const bools:Array <boolean>=[]
const bools:boolean[]=[]


type Point={
    x:number,
    y:number
}


const coords:Point[] = []
coords.push({x: 45, y: 8})


//multidimentional arrays
const board: string[][]=[["x","o"],["x","o"],["x","o"]]
const demo: number [][][]=[[[1]]]

