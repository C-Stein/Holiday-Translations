var $textarea;
var $button = $("#button")
var $translation = $("#translation");
var $selectedLanguage;

function grabText() {
  $textarea = $("#textarea").val();
  $selectedLanguage = $("#language").val();

  if ($selectedLanguage === "French") {
  	console.log("French slected")
  	$translation.text(Translate.translateToFrench($textarea));
  } else if ($selectedLanguage === "German") {
    $translation.text(Translate.translateToGerman($textarea));
  } else if ($selectedLanguage === "Spanish") {
  	$translation.text(Translate.translateToSpanish($textarea));
  }
  
}



$(document).ready(function() {

  $button.click(grabText);


});