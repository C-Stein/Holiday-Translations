var Translate = (function() {
  var spanishMatch = {
    "merry":"alegre", 
    "christmas":"navidad", 
    "and":"y", 
    "happy":"feliz", 
    "new":"nuevo", 
    "year":"año"
  }


  return {
    getSpanishMatch: function() {
      return spanishMatch;
    },

    translateToSpanish: function(stuff) {
       	//turn text into array of words
    
      var newWordArray = [];
      var wordArray = stuff.split(" ");
      console.log(wordArray[0]);
         console.log(wordArray)
         
  	//match text words (from array) with new language words
  	//ITERATE OVER OBJECT
      for (var i = 0; i < wordArray.length; i++) {
        for (var prop in spanishMatch) {
          if (prop === wordArray[i]) {
          	newWordArray.push(spanishMatch[prop]);
          }
        }
	  }
  	     console.log("newWordArray " + newWordArray)

  	//turn new language words into readable text
      var output = newWordArray.join(" ");

      return output;
    }
  }
})();

