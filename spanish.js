var Translate = (function(argument) {
  var spanishMatch = {
    "merry":"alegre", 
    "christmas":"navidad", 
    "and":"y", 
    "happy":"feliz", 
    "new":"nuevo", 
    "year":"año"
  }

argument.getSpanishMatch = function() {
  	return frenchMatch;
  };

  argument.translateToSpanish = function(stuff) {
    //turn text into array of words
    
      var newWordArray = [];
      var wordArray = stuff.split(" ");
      console.log(wordArray)
         
  	//iterate over object to match text words with new language words
  	
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

  return argument;


}(Translate || {}));