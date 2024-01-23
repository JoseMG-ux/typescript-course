export class Person {
  constructor(public name: string, public address: string) {
    this.name = name;
    this.address = address;
  }
}

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,

  ) {
    //super(realName, 'New York');
    this.person = new Person(realName, 'New York');
  }
}

const tony = new Person('Tony Stark', 'New York');
const ironMan = new Hero("Iron Man", 45, "Tony", tony);

console.log(ironMan);



