$(document).ready(function() {
  $("#appointmentBooking").submit(function() {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput= $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

  });
});
