interface Product{
    price: number;
    name: string;
    quantity: number;
}


const printProductSumary=(product:Product):void=>{
console.log(`${product.name} -$${product.price}`);
}

// to compile multiple files use tsc alone for file in same directory