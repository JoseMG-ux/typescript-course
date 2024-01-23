
export interface Product { 
    description: string;
    price: number; 
}

const phone: Product = {
    description: 'Pixel 7 Pro',
    price: 800
}

const tablet: Product = {
    description: 'iPad Air',
    price: 800
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    let total = 0;
    const { tax, products } = options;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [ phone, tablet ];
const tax = 0.15

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

// console.log(`Total: ${total}`)
// console.log(`Total: ${taxTotal}`)