console.log('JS OK');

/*
Scompongo il problema

Prima parte: Lo mostro in console
- 1 Creo il cliclo for e stampo in console i numeri da 1 a 100
- 2 Creo una variabile che contenga i miei numeri
- 3 I multipli di 3 verranno sostituiti da Fizz
- 4 I multipli di 5 verranno sostituiti da Buzz
- 5 I multipli di 3 e 5 verranno sostituiti da FizzBuzz
- 6 Stampo in console la variabile numbers

Seconda parte: Lo mostro nel DOM
*/

// - 1 Creo il ciclo for per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // - 2 Creo una variabile che contenga i miei numeri
    let numbers = i;

    // - 3 I multipli di 3 verranno sostituiti da Fizz
    if (i % 3 == 0) {
        numbers = 'Fizz'
    }

    // - 4 I multipli di 5 verranno sostituiti da Buzz
    if (i % 5 == 0) {
        numbers = 'Buzz'
    }

    // - 5 I multipli di 3 e 5 verranno sostituiti da FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
        numbers = 'FizzBuzz'
    }

    // - 6 Stampo in console la variabile numbers
    console.log(numbers);


}
