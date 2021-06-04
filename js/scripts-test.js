$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
  
    if (time === "lots") {
      $(".previous").hide();
      $("#fortran").show();
    } else {
      $("#blank").show();
    }
  });
});