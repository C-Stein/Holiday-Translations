var $textarea;
var $button = $("#button")
var $translation = $("#translation");
var $selectedLanguage;

function grabText() {
  $textarea = $("#textarea").val();
  $textarea = $textarea.toLowerCase();
  $selectedLanguage = $("#language").val();

  if ($selectedLanguage === "French") {
  	console.log("French slected")
  	$translation.text(Translate.translateToFrench($textarea));
  } else if ($selectedLanguage === "German") {
    $translation.text(Translate.translateToDeutsch($textarea));
  } else if ($selectedLanguage === "Spanish") {
  	$translation.text(Translate.translateToSpanish($textarea));
  }
  
}



$(document).ready(function() {

  $button.click(grabText);


});