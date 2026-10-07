$("#aboutBtn").click(function() {
    $("#aboutText").slideToggle();
  });

  $(".course-card").hover(function() {
    $(this).css("transform", "scale(1.05)");
  }, function() {
    $(this).css("transform", "scale(1)");   

  });

  $("#course").change(function() {
    let course = $(this).val();
   if(course) {
      $("#selectedCourse").text("You have selected: " + course);
    }else {
      $("#selectedCourse").text("");
    }
  });
  

  $("#faqContainer").on("click", ".question", function() {
    $(this).next(".answer").slideToggle();
  });

  //open model

    $("#contactBtn").click(function() {
        $("#contactModal").css("display", "flex");
    });

    //close model
    $("#closeBtn").click(function() {
        $("#contactModal").fadeOut();
    });

    $("#submitBtn").click(function() {
        alert("Thank you for contacting us! We will get back to you soon.");

    });


