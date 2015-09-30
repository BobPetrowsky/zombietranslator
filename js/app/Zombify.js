define([], function() {

  var Zombify = function() {
    this.zombify();
  };

  Zombify.prototype.zombify = function(input) {
    var zombieString = String(input)

    // 1. lower-case "r" at the end of words replaced with "rh".
    zombieString = zombieString.replace(/r\b/g, function(string){
            return string + 'h';
    });

    // 8. "r" or "R' is replaced by "RR"
    zombieString = zombieString.replace(/(?!(rh\b))r/gi, 'RR');

    // 2. an "a" or "A" is replaced with "hra".
    zombieString = zombieString.replace(/a/ig, 'hra');

    // 4. "e" or "E" is replaced by "rr"
    zombieString = zombieString.replace(/e/g, 'rr').replace(/E/g, 'rr');

    // 5. "i" or "I" is replaced by "rrRr"
    zombieString = zombieString.replace(/i/g, 'rrRr').replace(/I/g, 'rrRr');

    // 6. "o" or "O" is replaced by "rrrRr"
    zombieString = zombieString.replace(/o/g, 'rrrRr').replace(/O/g, 'rrrRr');

    // 7. "u" or "U" is replaced by "rrrrRr"
    zombieString = zombieString.replace(/u/g, 'rrrrRr').replace(/U/g, 'rrrrRr');

    // 9. "f" or "F" is replaced by "ph"
    zombieString = zombieString.replace(/f/g, 'ph').replace(/F/g, 'ph');

    // 10. Lowercase "l" but not Uppercase "L" is replaced by "Llll"
    zombieString = zombieString.replace(/l/g, 'Llll');

    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    // the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
    zombieString = zombieString.replace(/(?:^|(?:[.!?]\s))(\w+)/g, function(string) {
      if(string.charAt(1) == ' '){
        return string.charAt(0) + string.charAt(1) + string.charAt(2).toUpperCase() + string.substr(3);
      } else {
        return string.charAt(0).toUpperCase() + string.substr(1);
      }
    });




    return zombieString;

  };

  return Zombify;

});
