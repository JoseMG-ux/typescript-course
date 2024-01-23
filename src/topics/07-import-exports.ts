
import { Product, taxCalculation } from './06-functions-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Pixel 7 Pro',
        price: 800
    }
];

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log(`Total: ${total}, Total Tax: ${taxTotal}`)
