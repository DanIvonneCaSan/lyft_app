// variables globales
var $inPhone = $("#inphone");
var $btnNext = $("#btnnext");
var $inputValidate = $("#incode");
var $reset = $("#reset");
var $btnNext1 = $("#btnnext1");
var $codeV;
var $btnSignUp = $("#signupval");
var $btnSignUp2 = $("#signupval2");


// Funciones de redireccionamiento
$(document).ready(function() {
  if (document.title == "LYFT") {
    setTimeout(function() {
      window.location.href = './views/principal.html';
    }, 5000);
  } else if (document.title == "LYFT-Home"); {
    $('#sign').click(function() {
      window.location.href = '../views/signup.html';
    });
    $('#log').click(function() {
      window.location.href = '../views/verify2.html';
    });
  }
});

// Ingreso número de teléfono

function ver_imagen(valor){
  if(valor == 'opt'){
    document.getElementById('mapa').innerHTML = '---';
    document.getElementById('clave').innerHTML = '--';
  } else if(valor == 'chile'){
    document.getElementById('mapa').innerHTML = '<img src="../assets/images/chile.png" alt="Chile flag" width="50px"/>';
    document.getElementById('clave').innerHTML = '33';
  } else if(valor == 'mexico'){
    document.getElementById('mapa').innerHTML = '<img src="../assets/images/mexico.png" alt="México flag" width="50px"/>';
    document.getElementById('clave').innerHTML = '52';
  } else{
    document.getElementById('mapa').innerHTML = '<img src="../assets/images/peru.jpg" alt="Perú flag" width="50px"/>';
    document.getElementById('clave').innerHTML = '47';
  }
}

$inPhone.keyup(function() {
  if ($(this).val().trim().length === 10 && $.isNumeric($(this).val())) {
    $btnNext.removeClass("disabled");
  } else {
    $btnNext.addClass("disabled");
  }
});

// validación de número y generación de código
$btnNext.click(function() {
  var phoneNum = document.getElementById("inphone").value;
  if (phoneNum == null || phoneNum.length == 0 || /^\s+$/.test(phoneNum)) {
    alert("Ingresa un valor");
    return false;
  } else if (phoneNum.length === 10) {
    $codeV = genCode();
    localStorage.telephone = $inPhone.val();
    localStorage.setItem ("code", $codeV);
    alert("LAB- " + $codeV);
  }
  return $codeV;
});

$reset.click(function() {
  $codeV = genCode();
  localStorage.setItem ("code", $codeV);
  alert("LAB- " + $codeV);
  return $codeV;
});


function genCode() {
  var $code = Math.floor(Math.random() * 900) + 100;
  return $code;
};

// Validación del código ingresado

$inputValidate.keyup(function() {
  if ($(this).val().trim().length === 3 && localStorage.code === incode.value) {
    $btnNext1.removeClass("disabled");
    alert ("Código CORRECTO");
  } else if ($(this).val().trim().length === 3 && localStorage.code !== incode.value || $(this).val().trim().length === "") {
    alert ("Código INCORRECTO intenta nuevamente");
  }
});

// Almacenando datos de registro

$("#customCheck1").on( 'change', function() {
    if( $(this).is(':checked') ) {
        // Hacer algo si el checkbox ha sido seleccionado
        // alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
        // Botón de registro
        $btnSignUp.removeClass("disabled");
          $btnSignUp.click(function() {
            localStorage.setItem ("name", iname.value);
            localStorage.setItem ("lastname", ilastnm.value);
            localStorage.setItem ("email", emailAdress.value);
            window.location.href = '../views/signupdata.html';
            });
        // Botón cuando se registra por primera vez
        $btnSignUp2.removeClass("disabled");
        $btnSignUp2.click(function() {
          localStorage.setItem ("name", inameN.value);
          localStorage.setItem ("lastname", ilastnmN.value);
          localStorage.setItem ("email", emailAdressN.value);
           // Eliminando valores de la memoria
          localStorage.setItem ("code", "");
          localStorage.setItem ("telephone", "");
          window.location.href = '../views/signupdata.html';
        });
    } else {
        // Hacer algo si el checkbox ha sido deseleccionado
        alert("No haz aceptado los términos y condiciones");
    }
});
