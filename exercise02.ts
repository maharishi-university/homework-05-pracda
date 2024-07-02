const isPrime = (n: number) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
            }
        }
        if (n > 1) {
            resolve({ prime: true });
        }

    });
};

console.log('start');
async function testIsPrime() {
    try {
        const result = await isPrime(7);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
testIsPrime();
console.log('end');