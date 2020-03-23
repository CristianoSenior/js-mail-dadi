// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato
/*
var mailUtente = prompt("Ciao , inserisci la tua mail!")

var listaMail = ["alfiuccio@gmail.com","giovanni@gmail.com","alfredoballerino@gmail.com"];

var emailInEsame;


for ( var i = 0 ; i = listaMail.lenght; i++)
  emailInEsame = listaMail[i];
  if (emailInEsame === mailUtente){

  }
  */

// chiedere all'utente di inserire la propria mailUtente
var emailDaVerificare = prompt("Inserisci la tua mail ");

// inserire la lista mail su cui fare il controllo successivamente
var listaDaVerificare = ["cane", "gatto", "topo"];

// controllare la lista mail
  // significa
  // faccio un ciclo , verificando elemento per elemnto se è presente in lista

var emailInEsame;

var messaggio = "Email non verificata,accesso negato" ;

for (var i = 0; i < listaDaVerificare.length; i++) {

  // per ogni elemento del ciclo verifico se l'elemento è uguale alla mail che ho inserito nel prompt

  emailInEsame = listaDaVerificare[i];

  if (emailInEsame === emailDaVerificare){

    // se la mail è presente stampare un messaggi
    messaggio = "Puoi avere l'accesso , la mail è nel nostro elenco";
  }
  // else {
//     alert("La tua mail non è presente , non fare il furbo");
//     // se la mail non è presente stampare unmessaggio diverso
//   }
}
// output
// messaggio = alert("Email non verificata,accesso negato");
document.getElementById('ciao').innerHTML = messaggio;
