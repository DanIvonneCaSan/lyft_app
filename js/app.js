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
    document.getElementById('map').innerHTML = '---';
    document.getElementById('code').innerHTML = '--';
  } else if(valor == 'chile'){
    document.getElementById('map').innerHTML = '<img src="../assets/images/chile.png" alt="Chile flag" width="50px"/>';
    document.getElementById('code').innerHTML = '33';
  } else if(valor == 'mexico'){
    document.getElementById('map').innerHTML = '<img src="../assets/images/mexico.png" alt="México flag" width="50px"/>';
    document.getElementById('code').innerHTML = '52';
  } else{
    document.getElementById('map').innerHTML = '<img src="../assets/images/peru.jpg" alt="Perú flag" width="50px"/>';
    document.getElementById('code').innerHTML = '47';
  }
}
// Validación del número de teléfono, que sea de 10 dígitos y sólo números
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

// Generación de un código aleatorio
function genCode() {
  var $code = Math.floor(Math.random() * 900) + 100;
  return $code;
};

// Generación de un nuevo código cuando se presiona reset
$reset.click(function() {
  $codeV = genCode();
  localStorage.setItem ("code", $codeV);
  alert("LAB- " + $codeV);
  return $codeV;
});

// Validación del código ingresado
$inputValidate.keyup(function() {
  if ($(this).val().trim().length === 3 && localStorage.code === incode.value) {
    $btnNext1.removeClass("disabled");
    $btnNext1.addClass("active");
    alert ("Your code is CORRECT!!");
  } else if ($(this).val().trim().length === 3 && localStorage.code !== incode.value || $(this).val().trim().length === "") {
    alert ("Your code is INCORRECT. Try again, please!");
  }
});

// Almacenando datos de registro por primera vez
// No admite campos vacíos y que no se acepten los términos y condiciones
$btnSignUp.click(function () {
  console.log("here");
  if (iname.value !== "" && ilastnm.value !== "" && emailAdress.value !== "") {
      if ($("#customCheck1").is(':checked')) {
        // Almacena la información
        localStorage.setItem("name", iname.value);
        localStorage.setItem("lastname", ilastnm.value);
        localStorage.setItem("email", emailAdress.value);
        // Direcciona a la siguiente página
        window.location.href = '../views/signupdata.html';
      } else {
        // Hacer algo si el checkbox NO ha sido deseleccionado
        alert("You haven´t accept the terms and conditions.");
      }
  } else {
    alert("Some fields are empty");
  }
});

// Función cuando inicia sesión
$btnSignUp2.click(function(){
  if (inameN.value !== "" && ilastnmN.value !== "" && emailAdressN.value !== "") {
    localStorage.setItem("name", inameN.value);
    localStorage.setItem("lastname", ilastnmN.value);
    localStorage.setItem("email", emailAdressN.value);
    // Eliminando valores de la memoria, dado que no es necesario mantener su código
    localStorage.setItem("code", "");
    localStorage.setItem("telephone", "");
    window.location.href = '../views/signupdata.html';
  } else {
    alert("Some fields are empty. Please complete de registration.")
  }
});