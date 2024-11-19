/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// stabilire le variabili utili
// ciclo while per la correttezza del numero inserito dal player con prompt
// creare una funzione per la giocata casuale del cpu
// fare la somma delle due giocate e stabilire con una funzione se è pari o dispari
// stampare il messaggio di chi ha vinto



let player;
let isNumberValid = false;
let cpu;
let message;
let somma = player + giocataCpu(cpu);

while (!isNumberValid){
  player = parseInt(prompt('Inserisci un numero da 1 a 5'));
  if (!isNaN(player) && player > 0 && player < 6){
    isNumberValid = true;
  }
}
console.log('Giocata Player =', player);

function giocataCpu(cpu){
  cpu = Math.floor(Math.random() * 5 + 1);
  return cpu;
}

function pariOdispari(tot){
  if (somma % 2){
    return 'DISPARI';
  } else if (!somma % 2){
    return 'PARI';
  }
}

if (player > giocataCpu(cpu)){
  message = 'HAI VINTO';
} else if (player < giocataCpu(cpu)){
  message = 'HAI PERSO';
} else {
  message = 'PAREGGIO';
}

console.log(message);
