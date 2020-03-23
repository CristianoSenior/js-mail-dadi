// Gioco dei dadi, chi fa di più vince.


var msg;
// l'utente uno avrà assegnato il numero che esce
var utenteUnoNumero = alert(Math.floor(Math.random() * 6));

// l'utente 2 avrà assegnato il secondo numero che esce
var utentePCNumero = alert(Math.floor(Math.random() * 6));
// se il numero di utente 1 è maggiore vincerà
// confrontare i due numeri degli utenti
if (utenteUno > utentePCNumero ){
  msg = ("Hai vinto , che culo !")
}
// se il numero di utentePCNumero è maggiore vincerà
 else if (utenteUno < utentePCNumero ) {
   msg = " Hai perso , sfortunello"
 } else {
   msg = "I due numeri sono uguali"
 }


document.getElementById('ciao').innerHTML = msg ;
