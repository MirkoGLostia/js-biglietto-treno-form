// esercizio di oggi: calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e   l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) ; va applicato uno sconto del 20% per i minorenni ; va applicato uno sconto del 40% per gli over 65. ; L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// variabili
let distance, utAge, utPrezzo, prezzoConEta, prezzoFinale, toPay, utName;

const prezzoBase = 21;


// richiesta info utente
utName = prompt ("come ti chiami");

distance = parseInt ( prompt ("quanti chilometri devi percorrere? controlla la mappa delle rotaie se non sei sicuro, e ricorda, se devi tornare devi raddoppiare la distanza"));

utAge = parseInt ( prompt ("quanti anni hai?"));


// calcolo prezzo biglietto, basato sulla distanza, in centesimi
utPrezzo = distance * prezzoBase;


// calcolo prezzo finale basato sull'età
if (utAge < 18) {
    // se minore di 18, 20% di sconto
    const discount = (utPrezzo * 20) / 100;
    prezzoConEta =  utPrezzo - discount;


    //conversione centesimi in euro
    prezzoFinale = prezzoConEta / 100;


    // debug
    // console.log(discount);
    // console.log(prezzoConEta);
    // console.log(prezzoFinale);


} else if (utAge >= 65) {
    // se maggiore o uguale di 65, 40% di sconto
    const discount = (utPrezzo * 40) / 100;
    prezzoConEta =  utPrezzo - discount;


    //conversione centesimi in euro
    prezzoFinale = prezzoConEta / 100;


    // debug
    // console.log(discount);
    // console.log(prezzoConEta);
    // console.log(prezzoFinale);


} else {
    // se nessuna delle due prezzo base
    //conversione centesimi in euro
    prezzoFinale = utPrezzo / 100;


    // debug
    // console.log(prezzoFinale);


}

// conversione in valuta
let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

toPay = euro.format(prezzoFinale)




// esportazione in html
document.getElementById ("utName").innerHTML = utName
document.getElementById ("distance").innerHTML = distance
document.getElementById ("utAge").innerHTML = utAge
document.getElementById ("prezzo").innerHTML = toPay




// main debug
// console.log(utPrezzo);
// console.log (distance, utAge);




