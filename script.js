var $textarea;
function grabText() {
	$textarea = $("#textarea").val();
}
var $button = $("#button")

$(document).ready(function() {

  $button.click(grabText);

});