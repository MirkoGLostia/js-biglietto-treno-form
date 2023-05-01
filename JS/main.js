
// variabili
let distance, utAge, utPrezzo, prezzoConEta, prezzoFinale, toPay, utName, vagone, codeCP;

const prezzoBase = 21;


// clear button
clear.onclick = function(){
    document.getElementById("name").value = "";
    document.getElementById("distance").value = "";
    document.getElementById ("age").value ="";
}


// submit button
submit.onclick = function(){

    // acquisizione info
    utName = document.getElementById("name").value;
    distance = document.getElementById("distance").value;
    utAge = document.getElementById ("age").value;


    // calcolo prezzo biglietto, basato sulla distanza, in centesimi
    utPrezzo = distance * prezzoBase;


    // calcolo prezzo finale basato sull'età
    if (utAge < 18) {
        // se minore di 18, 20% di sconto
        const discount = (utPrezzo * 20) / 100;
        prezzoConEta =  utPrezzo - discount;


        // conversione centesimi in euro
        prezzoFinale = prezzoConEta / 100;


        // message display
        utAge = "20% discount"


    } else if (utAge >= 65) {
        // se maggiore o uguale di 65, 40% di sconto
        const discount = (utPrezzo * 40) / 100;
        prezzoConEta =  utPrezzo - discount;


        //conversione centesimi in euro
        prezzoFinale = prezzoConEta / 100;


        // message display
        utAge = "40% discount"


    } else {
        // se nessuna delle due prezzo base
        //conversione centesimi in euro
        prezzoFinale = utPrezzo / 100;


        // message display
        utAge = "No discount"


    }

    // conversione in valuta
    let euro = Intl.NumberFormat('en-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    toPay = euro.format(prezzoFinale)

    vagone = Math.floor((Math.random() * 10) + 1);

    codeCP =  Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;


  
    document.getElementById("utName").innerText = utName;
    document.getElementById("utAge").innerText = utAge;
    document.getElementById("toPay").innerText = toPay;
    document.getElementById("vagone").innerText = vagone;
    document.getElementById("codeCP").innerText = codeCP;
}






