$(document).ready(function() {

  $(".clickable").click(function() {
    $("#epicodus-showing").slideToggle();
    $("#epicodus-hidden").slideToggle();
  });

  $("form#track").submit(function(event) {
    var age = parseInt($("input#age").val());
    var height = parseFloat($("input#height").val());
    var weight = parseInt($("input#weight").val());
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);


    if (age && weight && height) {
      if (age < 18 && weight < 60) {
        $("#suggestion, #css, #java, #conclusion").show();
      } else if (age >= 18 && weight < 60) {
        $("#suggestion, #ruby, #c, #conclusion").show();
      } else {
        $("#suggestion, #php, #conclusion").show();
      }
    } else {
      alert('Please enter all information.');
      }

    event.preventDefault();
  });
});
