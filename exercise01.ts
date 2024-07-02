class Meditation {
    seconds:number;
    constructor(seconds: number) {
        this.seconds = seconds;
    }

    start(): void {
    let timer = this.seconds;
    const intervalId = setInterval(() => {
        console.log(timer--);
        if (timer === 0) {
            clearInterval(intervalId);
            console.log('Jay Guru Dev');
        }
    }, 1000);
}
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
