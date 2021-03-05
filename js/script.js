// definisco le variabili
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger-input');
// 3 --- prendo tutti gli ingriedenti
var ingredients = document.getElementsByClassName('add-ingrendent');
var cheese = document.getElementById('cheese');
var sum = 50;
var coupons = ["123asds", "qwe567", "tommy10"]
// aggiungo l'evento click
calculate.addEventListener('click',
  function () {


    // controllo se il nome è stato inserito
    if ( burgerName.value != "" ) {
      var sum = 50;

      // 4 --- ciclo gli ingriedenti
      for (var i = 0; i < ingredients.length; i++) {
        // 5 --- se l'ingrediente è stato selezionato prendere il suo valore e sommarlo al costo del panino
        if (ingredients[i].checked){
          sum += parseInt(ingredients[i].value);
        }
      }
      // 6 --- applico sconto
      var coupon = document.getElementById("coupon-input");
      if (coupons.includes(coupon.value) ) {
        sum -= sum * 0.2;
      }
      // 7 --- stampo il totale
      document.getElementById("total").innerHTML = sum.toFixed(2);
    } else {
      alert("Inserisci il nome del tuo burger");
    }
  }
);
