    $(function() {
        $('#button').on('click', function(e){
            e.preventDefault();

         var getLanguage = $('#language option:selected').val();
         var language;      

         var text = $('input[name="textarea"]').val();

       /* removing accents due to bugs   if($selectedLanguage === "French") {
             language = "de";
         } 
         else if ($selectedLanguage === "German") {
             language = "de"; 
           }
         else if ($selectedLanguage === "Spanish") {
             language = "es";
         }
        else
            return;
*/

         text = encodeURIComponent(text);
         console.log(text);
         console.log(language);
       
          var url = "http://translate.google.com/translate_tts?ie=UTF-8&q=" + text + "&tl=en";
       
          console.log(url);
          //Sends audio to page 
          $('audio').attr('src', url).get(0).play();
    });

   });


