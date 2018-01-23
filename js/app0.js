$('#advanced').flagStrap({
  buttonSize: "btn-lg",
  buttonType: "btn-primary",
  labelMargin: "20px",
  scrollable: false,
  scrollableHeight: "350px",
  onSelect: function(value, element) {
    alert(value);
    console.log(element);
  }
});
