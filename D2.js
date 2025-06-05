/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 33
const num2 = 13

if (num1 > num2) {
  console.log('Sono maggiore')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const eqnum1 = 5
const eqnum2 = 15

if (eqnum1 !== eqnum2) {
  console.log('Not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const divnum1 = 25
const divnum2 = 5

if (divnum1 % divnum2 === 0) {
  console.log('Divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numb1 = 8
const numb2 = 0

if (numb1 === 8 || numb2 === 8 || numb1 - numb2 === 8 || numb1 + numb2 === 8) {
  console.log('Sono uguale a 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 55
const shippingCost = 10
let total = 0

if (totalShoppingCart > 50) {
  console.log('FreeShipping')
  total = totalShoppingCart
} else {
  console.log('10€ shipping')
  total = totalShoppingCart + shippingCost
}

console.log('Il totale da pagare è ' + total)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCart2 = 55
const shippingCost2 = 10
let total2 = 0

if (totalShoppingCart2 * 0.8 > 50) {
  // il cliente ha diritto alle spese di spedizione gratuite
  total2 = totalShoppingCart2
} else {
  // il cliente paga le spese di spedizione
  total2 = totalShoppingCart2 * 0.8 + shippingCost2
}

console.log('Il totale da pagare è ' + total2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let z1 = 6
let z2 = 14
let z3 = 10

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2)
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2)
    } else {
      console.log(z1, z2, z3)
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1)
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1)
    } else {
      console.log(z2, z1, z3)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const numero = 20
const stringa = 'Ciao'
const booleano = true

console.log(typeof numero)
console.log(typeof stringa)
console.log(typeof booleano)

// if (typeof fornito === 'number' && !isNaN(fornito)) {
//   console.log('il valore fornito è un numero!')

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const number = 10
const number1 = 13

if (number % 2 === 0) {
  console.log(number + ' è un numero pari.')
} else {
  console.log(number + ' è un numero dispari.')
}
if (number1 % 2 === 0) {
  console.log(number1 + ' è un numero pari.')
} else {
  console.log(number1 + ' è un numero dispari.')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 4
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

let me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2)
// oppure me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array = null
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// oppure const arr = []
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// arr.push(10)

// oppure
// arr.push(1,2,3,4,5,6,7,8,9,10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.splice(9, 1, 100)
console.log(array)

// // oppure

// arr.splice(9, 1, 100)
// // o
// arr.pop()
// arr.push(100)
// // o
// arr[9] = 100
// // o
// delete arr[9]
// arr[9] = 100
// // o
// arr[arr.length - 1] = 100
