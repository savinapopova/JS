function solve(num) {

    let isPrime = false;
    let count = 0;

    for (let i = num; i > 0 ; i--) {

        if (num % i === 0) {
            count++;
        }
        if (count > 2) {
            break;
        }
    }

    if (count === 2) {
        isPrime = true;
    }
    console.log(isPrime);
}
