// definisco le variabili
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger-input');
// 3 --- prendo tutti gli ingriedenti
var ingredients = document.getElementsByClassName('add-ingrendent');
var cheese = document.getElementById('cheese');
var sum = 50;
// aggiungo l'evento click
calculate.addEventListener('click',
  function () {


    // controllo se il nome è stato inserito
    if ( burgerName.value != "" ) {
      var sum = 50;


      for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked){
          sum += parseInt(ingredients[i].value);
        }
      }

      console.log(sum);
    } else {
      alert("Inserisci il nome del tuo burger");
    }
  }
);

// 4 --- ciclo gli ingriedenti
// 5 --- se l'ingrediente è stato selezionato prendere il suo valore e sommarlo al costo del panino
// 6 --- applico sconto
// 7 --- stampo il totale
