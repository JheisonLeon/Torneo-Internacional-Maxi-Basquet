// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    var tabla = document.getElementById('tablaCategorias');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            if(tabla.rows.length == 1){
                alert("Debe ingresar al menos una Categoria");
            }
          }else if(tabla.rows.length == 1){
              alert("Debe ingresar al menos una Categoria");
            event.preventDefault()
            event.stopPropagation()
            }
          form.classList.add('was-validated')
        
        }, false)
      })
  })()

  var nroCate = 0;
  function validacionMin() {
      let min = document.getElementById('minimoModal_input');
      let max = document.getElementById('maximoModal_input');
      if (min.value < 30) {
          min.value = 30;
      }else if(min.value > 60){
          min.value = 60;
      }else if(max.value>0 && min.value > max.value){
          alert("La edad minima no puede ser mayor a la maxima");
          min.value = max.value;
      }
  }

  function validacionMax() {
      let max = document.getElementById('maximoModal_input');
      let min = document.getElementById('minimoModal_input');
      if (max.value < 30) {
          max.value = 30;
      }else if(max.value > 60){
          max.value = 60;
      }else if(min.value > max.value){
          alert("La edad minima no puede ser mayor a la maxima");
          min.value = max.value;
      }
  }

  function insertarFila() {
      let tablaCategorias = document.getElementById('tablaCategorias').insertRow(1);
      let name = document.getElementById('nombreModal_input');
      let min = document.getElementById('minimoModal_input');
      let max = document.getElementById('maximoModal_input');
     
      if (min.checkValidity() && name.checkValidity() && max.checkValidity()) {
          if (min.value > max.value) {
              alert('La edad minima no puede ser mayor a la maxima');
          } else if (min.value < 30 && max.value < 30) {
              alert('La edad minima es de 30 años');
          } else {
              let nameCell = tablaCategorias.insertCell(0);
              let minCell = tablaCategorias.insertCell(1);
              let maxCell = tablaCategorias.insertCell(2);
              nameCell.innerHTML = name.value;
              minCell.innerHTML = min.value;
              maxCell.innerHTML = max.value;
              nroCate = nroCate + 1;
              let cerrar = document.getElementById('modalCancelar');
              cerrar.click();
          }

      } else {
          alert("LLene correctamente todos los campos")
      }

  }
  let inicio = document.getElementById('fechaIni_input');
  let fin = document.getElementById('fechaFin_input');
  let inicioPre = document.getElementById('fechaPreIni_input');
  let finPre = document.getElementById('fechaPreFin_input');
  let inicioRez = document.getElementById('fechaInsIni_input');
  let finRez = document.getElementById('fechaInsFin_input');

  let fechaActual = new Date(Date.now());
  let now = moment(fechaActual).format('YYYY-MM-DD')

  function fechasTorneoRez() {
      if(inicio.value.length==0 && fin.value.length==0 && inicioPre.value.length==0 && finPre.value.length==0){
          alert("Debe llenar primero las anteriores fechas");
          finRez.value = "";
          inicioRez.value = "";
      }else{
          if (finRez.value.length > 0 && inicioRez.value.length > 0) {
              if(inicioRez.value<=finPre.value || inicioRez.value>=fin.value || finRez.value<=finPre.value || finRez.value>=fin.value){
                  alert("Las fechas de rezagados tiene que estar dentro los limites")
                      finRez.value = "";
                      inicioRez.value = "";
              }else{
                  if (finRez.value < inicioRez.value) {
                      alert("La fecha final de Rezagados tiene que ser mayor a la de inicio")
                      finRez.value = "";
                  }
              }
          } else {
              if (finRez.value.length == 0) {
                  if(inicioRez.value<=finPre.value || inicioRez.value>=fin.value){
                      alert("Las fechas de rezagados tiene que estar dentro los limites")
                      finRez.value = "";
                      inicioRez.value = "";
                  }
              } else {
                  if(finRez.value<=finPre.value || finRez.value>=fin.value){
                      alert("Las fechas de rezagados tiene que estar dentro los limites")
                      finRez.value = "";
                      inicioRez.value = "";
                  }
              }
          }
      }
  }

  function fechasTorneoPre() {
      if(inicio.value.length==0 && fin.value.length==0){
          alert("Debe llenar primero las fechas del torneo");
          finPre.value = "";
          inicioPre.value = "";
      }else{
          if (finPre.value.length > 0 && inicioPre.value.length > 0) {
              if(inicioPre.value<inicio.value || inicioPre.value>=fin.value || finPre.value<=inicio.value || finPre.value>=fin.value){
                  alert("Las fechas de pre-inscripcion tiene que estar dentro el limite de las fechas del torneo")
                      finPre.value = "";
                      inicioPre.value = "";
              }else{
                  if (finPre.value < inicioPre.value) {
                      alert("La fecha final de Pre-inscripcion tiene que ser mayor a la de inicio")
                      finPre.value = "";
                  }
              }
          } else {
              if (finPre.value.length == 0) {
                  if(inicioPre.value<inicio.value || inicioPre.value>=fin.value){
                      alert("Las fechas de pre-inscripcion tiene que estar dentro el limite de las fechas del torneo")
                      finPre.value = "";
                      inicioPre.value = "";
                  }
              } else {
                  if(finPre.value<=inicio.value || finPre.value>=fin.value){
                      alert("Las fechas de pre-inscripcion tiene que estar dentro el limite de las fechas del torneo")
                      finPre.value = "";
                      inicioPre.value = "";
                  }
              }
          }
      }
  }

  function fechasTorneo() {

      if (fin.value.length > 0 && inicio.value.length > 0) {
          if (inicio.value < now) {
              alert("No se permiten fechas pasadas")
              inicio.value = "";
              fin.value = "";
          } else {
              if (fin.value <= inicio.value) {
                  alert("La fecha final del torneo tiene que ser mayor a la de inicio")
                  fin.value = "";
              }
          }
      } else {
          if (fin.value.length == 0) {
              if (inicio.value < now) {
                  alert("No se permiten fechas pasadas")
                  inicio.value = now;
                  fin.value = "";
              }
          } else {
              if (fin.value < now) {
                  alert("No se permiten fechas pasadas")
                  inicio.value = "";
                  fin.value = now;
              }
          }
      }
  }

function cerrarModal(){
    let cerrar = document.getElementById('modalCancelar');
    let name = document.getElementById('nombreModal_input');
    let min = document.getElementById('minimoModal_input');
    let max = document.getElementById('maximoModal_input');
   
    name.value="";
    min.value="";
    max.value="";
    cerrar.click();
}