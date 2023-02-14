// tsc --init to get the tsconfig.json

// tsc index.ts to to compile the index.js file once

// tsc --watch or -w index.ts to compile every time there is a change

// to compile multiple files use tsc alone for file in same directory
// tsc -w alone

//in typscript playgrounf / docs / Project Configuration /TSConfig Reference

//#
// Files -
// files
// Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found.
// under the compileroptions you the files you only want to compile
// "files": [
//     "farmstand.ts",
//     "index.ts"
//   ]

//or include and exclude

// "outDir": "./dist",  make a dist file for your js files




interface Chicken{
 breed:string;
 eggsPerWeek:number; 
 name:string;
 age:number;
}

const norma:Chicken = {
 breed:"Silkie",
 eggsPerWeek:4,
 name:"Norma" ,
 age:1
}