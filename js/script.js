// definisco le variabili
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger-input');
var ingredients = document.getElementsByClassName('add-ingrendent');
var cheese = document.getElementById('cheese');
// aggiungo l'evento click
calculate.addEventListener('click',
  function () {


    // controllo se il nome è stato inserito
    if ( burgerName.value != "" ) {
      if (cheese.checked){
        for (var i = 0; i < ingredients.length; i++) {
          console.log(ingredients[i].checked);
        }
      }
    } else {
      alert("Inserisci il nome del tuo burger");
    }
  }
);
// 3 --- prendo tutti gli ingriedenti
// 4 --- ciclo gli ingriedenti
// 5 --- se l'ingrediente è stato selezionato prendere il suo valore e sommarlo al costo del panino
// 6 --- applico sconto
// 7 --- stampo il totale
