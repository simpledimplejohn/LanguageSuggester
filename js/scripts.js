$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
  
    if (time === "lots") {

      $("#fortran").show();
      
    } else if (time === "some") {
      $("#cobol").show();
    } else if (time === "little") {
      $("#lisp").show();
    } else {
      $("#pascal").show();
    }
  });
});