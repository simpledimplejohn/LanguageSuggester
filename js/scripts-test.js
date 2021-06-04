$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
  
    if (time === "lots") {
      $("#fortran").show();
      $(".previous").hide();
    } else {
      $("#blank").show();
    }
  });
});