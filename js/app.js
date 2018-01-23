$(document).ready(function() {
  if (document.title == "LYFT") {
    setTimeout(function() {
      window.location.href = './views/principal.html';
    }, 5000);
  } else if (document.title == "LYFT-Home"); {
    $('#sign').click(function() {
      window.location.href = '../views/signup.html';
    });
  }
});
