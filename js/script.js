// definisco le variabili
var calculate = document.getElementById('calculate');
// aggiungo l'evento click
calculate.addEventListener('click',
  function () {
    var burgerName = document.getElementById('burger-input');

    // controllo se il nome è stato inserito
    if ( burgerName.value != "" ) {
      console.log(burgerName.value);
    } else {
      alert("Inserisci il nome del tuo burger");
    }
  }
);
