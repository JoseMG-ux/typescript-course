
const classDecorator = (
    constructor: any
) => {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'ABC';

    print() {
        console.log('Hello World');
    }
}

const myClass = new SuperClass();

console.log(myClass)
