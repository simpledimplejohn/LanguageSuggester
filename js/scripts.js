$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
    const decade = $("#decade").val();
    const computer = $("#computer").val();
  
    if(decade === "1960s") {
      //$(".previous").hide();
      $("#fortran").show();
    } else if(decade === "1970s") {
      //$(".previous").hide();
      $("#cobol").show();
    } else if(computer === "mainframe") {
      //$(".previous").hide();
      $("#lisp").show();
    } else if(computer === "ibm") {
      //$(".previous").hide();
      $("#pascal").show();
    } else if(decade === "1980s" || computer === "commodore64") {
      //$(".previous").hide();
      $("basic#").show();
    } else if(time === "none" || time === "little" || computer === "pc"){
      //$(".previous").hide();
      $("#javascript").show();
    } else {
      //$(".previous").hide();
      $("#javascript").show();
    }
  });
});