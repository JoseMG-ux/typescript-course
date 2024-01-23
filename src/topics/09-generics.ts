export const whatMyType = <T>( argument: T ): T => { //generic <T>
    return argument;
}

let amIString = whatMyType<string>('Hello World');
let amINumber = whatMyType<number>(2);
let amIArray = whatMyType<number[]>([1,2]);

console.log( amIString.split(' ') )
console.log( amINumber.toFixed() )
console.log( amIArray.join('-') )