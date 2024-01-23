
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 35,
    song: "IN MY REMAINS",
    details: {
        author: 'Linkin Park',
        year: 2015
    }
}

const { audioVolume, song } = audioPlayer; //Destructuring

// console.log(audioVolume);
// console.log(song);

const [, , trunks = 'Not Found']: string[] = [ 'Goku', 'Vegeta', 'Trunks' ];

console.log('Character 3:', trunks);