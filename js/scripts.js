$(function() {
  $("form#booking").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var date = $("#datePicker").val();
    var start = $("#timeStart").val();
    var end = $("#timeEnd").val();
    $("#user").append(name);
    $("#dateTime").append(date + " at " + start + " to " + end);
  });
});
