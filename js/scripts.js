$(document).ready(function() {
  $("form#worldview").submit(function(event) {

    var age = $("select#age").val();

    if (age === "yes" ) {
        $("#age").confirm(conservative);
      } else if (age === "no") 
		$("#age").confirm(liberal);
      {

    var racist = $("select#racist").val();

    if (racist === "yes" ) {
        $("#racist").confirm(conservative);
      } else if (racist === "no") 
		$("#racist").confirm(liberal);
      {

    var liberal_conspiracy = $("select#liberal_conspiracy").val();

    if (liberal_conspiracy === "yes" ) {
        $("#liberal_conspiracy").confirm(liberal);
      } else if (liberal_conspiracy === "no") 
		$("#liberal_conspiracy").confirm(conservative);
      {

    var liberal_conspiracy = $("select#liberal_conspiracy").val();

    if (liberal_conspiracy === "yes" ) {
        $("#liberal_conspiracy").confirm(5);
      } else if (liberal_conspiracy === "no") 
		$("#liberal_conspiracy").confirm(1);
      {
  //   alert("Now don't go crazy!");

  //     $("#rate").empty().append(quote);
  //     $("#quote").show();
  //   } else {
  //     alert('Please enter your age.');
  //   }

  //   event.preventDefault();
  // });
});
  