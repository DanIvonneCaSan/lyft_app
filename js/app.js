// variables globales
var $inPhone = $("#inphone");
var $btnNext = $("#btnnext");
//var $inputCode = $("#input-code");
var $inputValidate = $("#incode");
var $reset = $("#reset");
var $btnNext1 = $("#btnNext1");
var $codeV;
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
      window.location.href = '../views/verify.html';
    });
  }
});

// Ingreso número de teléfono

$inPhone.keyup(function() {
  if ($(this).val().trim().length === 10) {
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
    alert("LAB- " + $codeV);
    localStorage.labCode = $codeV;
    // localStorage.setItem ($codeV);
    localStorage.telephone = $inPhone.val();
  }
  return $codeV;
});

$reset.click(function() {
  var $code = Math.floor(Math.random() * 900) + 100;
  alert("LAB- " + $code);
  return $code;
});


function genCode() {
  var $code = Math.floor(Math.random() * 900) + 100;
  return $code;
};

// Validación del código ingresado

$inputValidate.keyup(function() {
  if ($(this).val().trim().length === 3) {
    $btnNext1.removeClass("disabled");
    var $codeVal = $inputValidate.value;
  } else if ($(this).val().trim().length !== 3 || $(this).val().trim().length === "") {
    $btnNext1.addClass("disabled");
  }
});

var $codeVal = document.getElementsByTagName('incode').value;
console.log($codeVal);
$btnNext1.click(function() {

  console.log($codeVal);
  console.log(localStorage.labCode);
  if ($codeVal === localStorage.labCode) {
    $btnNext1.removeClass("disabled");
  } else if ($codeVal !== localStorage.labCode) {
    $btnNext1.addClass("disabled");
    alert("Código inválido");

  }
});
