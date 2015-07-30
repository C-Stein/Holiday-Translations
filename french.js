var Translate = (function(argument) {
  var frenchMatch = {
  	"merry":"joyeux", 
  	"christmas":"Noel", 
  	"and":"et", 
  	"happy":"heureux", 
  	"new":"nouveau", 
  	"year":"année"
  };

  argument.getFrenchMatch = function() {
  	return frenchMatch;
  };

  argument.translateToFrench = function(stuff) {
       	//turn text into array of words
    
      var newWordArray = [];
      var wordArray = stuff.split(" ");
      console.log(wordArray[0]);
         console.log(wordArray)
         
  	//match text words (from array) with new language words
  	//ITERATE OVER OBJECT
      for (var i = 0; i < wordArray.length; i++) {
        for (var prop in frenchMatch) {
          if (prop === wordArray[i]) {
          	newWordArray.push(frenchMatch[prop]);
          }
        }
	  }
  	     console.log("newWordArray " + newWordArray)

  	//turn new language words into readable text
      var output = newWordArray.join(" ");

      return output;
  }

  return argument;


})(Translate);