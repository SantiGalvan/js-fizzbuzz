# FizzBuzz

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero.
- per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc).

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList).
<hr>

## Scompongo il problema
### Prima parte: Lo mostro in console
- 1 Creo il cliclo for e stampo in console i numeri da 1 a 100
- 2 Creo una variabile che contenga i miei numeri
- 3 I multipli di 3 verranno sostituiti da Fizz
- 4 I multipli di 5 verranno sostituiti da Buzz
- 5 I multipli di 3 e 5 verranno sostituiti da FizzBuzz
- 6 Stampo in console la variabile numbers

### Seconda parte: Lo mostro nel DOM
- 7 Recupero gli elementi dal DOM
- 8 Creo il mio elemento
- 9 Aggiungo una classe ai multipli di 3
- 10 Aggiungo una classe ai multipli di 5
- 11 Aggiungo una classe per i multipli di 3 e di 5 e rimuovo le precedenti
- 12 Stampo nel DOM il mio elemento
