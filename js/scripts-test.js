$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
    const decade = ($("#decade").val());

    if (decade === "1960") {
      $(".previous").hide();
      $("#fortran").show();
    } else if(decade === "1950") {
      $(".previous").hide();
      $("#cobol").show();
    } else if(decade === "1970") {
      $(".previous").hide();
      $("#lisp").show();
    } else if(decade === "1940") {
      $(".previous").hide();
      $("#pascal").show();
    } else if(decade === "1980") {
      $(".previous").hide();
      $("#basic").show();
    } else {
      $(".previous").hide();
      $("#javascript").show();
    }
  });
});