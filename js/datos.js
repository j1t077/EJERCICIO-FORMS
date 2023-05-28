function captura() {
  var nombre1 = document.getElementById('nombre').value;
  var email1 = document.getElementById('email').value;
  var edad1 = document.getElementById('edad').value;
  var eleccion1 = document.getElementById('eleccion').value;
  
  const radios = document.querySelectorAll('input[type="radio"][name="recomendarias"]');
  let opRadio;
  radios.forEach(radio => {
    if (radio.checked) {
      opRadio = radio.value;
    }
  });

  console.log("\n " + nombre1 + "\n " + email1 + "\n " + edad1 + "\n " + eleccion1 + "\n " + opRadio + "\n ");
}

  function captura2() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="lenguajes"]');
    const seleccionados = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        seleccionados.push(checkbox.value);
      }
    });
     console.log(seleccionados.join('\n'));
  }
    captura2();

    function captura3(texto) {
      console.log(texto);
    }

    var sugerencias = document.getElementById("sugerencias");
   
    function imprimirSugerencias() {
      var texto = sugerencias.value;
      captura3(texto);
    }