/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Creare prompt per inserire la parola 
// Creare un ciclo for di lettura al contrario in una funzione
// creare il message di output 

const insertWord = prompt('Inserisci una parola').toLowerCase();
let message;


function reverse(word){
  let outword = '';
  for (let i = word.length -1; i >= 0; i--){
     outword += word[i];
  }
  return reverse;
}

if (insertWord === reverse(insertWord)){
  message = 'È una parola palindroma';
 } else {
  message = 'NON è una parola palindroma';
}

console.log(message);
