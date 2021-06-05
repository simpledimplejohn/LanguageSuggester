$(document).ready(function() {
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();

    const time = $("#time").val();
    const decade = $("#decade").val();

    if ((time === "lots") && (decade === "1960")) {
      $(".previous").hide();
      $("#fortran").show();
    } else if(time === "lots" && decade === "1970") {
      $(".previous").hide();
      $("#cobol").show();
    } else if(time === "some" && decade === "1970s") {
      $(".previous").hide();
      $("#lisp").show();
    } else if(time === "lots" && decade === "1950") {
      $(".previous").hide();
      $("#pascal").show();
    } else if(decade === "1980s") {
      $(".previous").hide();
      $("#basic").show();
    } else {
      $(".previous").hide();
      $("#javascript").show();
    }
  });
});