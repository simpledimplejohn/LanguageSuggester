$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
  
    if (time === "lots") {
      $(".previous").hide();
      $("#fortran").show();
      
    } else if (time === "some") {
      $(".previous").hide();
      $("#cobol").show();
    } else if (time === "little") {
      $(".previous").hide();
      $("#lisp").show();
    } else {
      $(".previous").hide();
      $("#pascal").show();
    }
  });
});