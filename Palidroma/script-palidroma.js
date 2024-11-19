/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Creare prompt per inserire la parola 
// Creare un ciclo for di lettura al contrario 
// Creare la funzione di verifica della parola palindroma 
// creare il message di output 

let message;
let outword = ' ';
const insertWord = prompt('Inserisci una parola');
reverse(insertWord);


function reverse(word){
  for (let i = word.length -1; i > 0; i--){
     outword += word[i];
  }
}

if (insertWord === reverse(insertWord)){
  message = `${insertWord} è una parola palindroma`;
 } else {
  message = `${insertWord} NON è una parola palindroma`;
}

console.log(message);
