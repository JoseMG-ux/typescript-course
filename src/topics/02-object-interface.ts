
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;// Puede ser undefined "?"
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    homeTown: "Ring City"
}
console.log(strider)
export {};