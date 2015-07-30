    $(function() {
        $('#button').on('click', function(e){
            e.preventDefault();

         var getLanguage = $('#language option:selected').val();
         var language;      

         var text = $('input[name="textarea"]').val();

         if($selectedLanguage === "French") {
             language = "fr";
         } 
         else if ($selectedLanguage === "German") {
             language = "de"; 
           }
         else if ($selectedLanguage === "Spanish") {
             language = "es";
         }
        else
            return;


         text = encodeURIComponent(text);
         console.log(language);
        
          var url = "http://translate.google.com/translate_tts?ie=UTF-8&q=" + text + "&tl=" + language + "";
        //Sends audio to page 
          $('audio').attr('src', url).get(0).play();
    });

   });


