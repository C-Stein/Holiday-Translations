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
  	//does magic

  }

  return argument;


})(Translate);