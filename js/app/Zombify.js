define([], function() {

  var Zombify = function() {
    this.zombify();
  };

  Zombify.prototype.zombify = function(english) {
    var zombieString = String(english)
    // 1. lower-case "r" at the end of words replaced with "rh".
    zombieString.replace(/r\b/g, function(string){
            return string + 'h';
    });

    // 2. an "a" or "A" is replaced with "hra".
    zombieString.replace(/a/ig, 'hra');

    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    // the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
    zombieString.replace(/(?:^|(?:[.!?]\s))(\w+)/g, function(string) {
      if(string.charAt(1) == ' '){
        return string.charAt(0) + string.charAt(1) + string.charAt(2).toUpperCase() + string.substr(3);
      } else {
        return string.charAt(0).toUpperCase() + string.substr(1);
      }
    });

    // 4. "e" or "E" is replaced by "rr"
    zombieString.replace(/e/g, 'rr').replace(/E/g, 'rr');

    // 5. "i" or "I" is replaced by "rrRr"
    zombieString.replace(/i/g, 'rrRr').replace(/I/g, 'rrRr');

    // 6. "o" or "O" is replaced by "rrrRr"
    zombieString.replace(/o/g, 'rrrRr').replace(/O/g, 'rrrRr');

    // 7. "u" or "U" is replaced by "rrrrRr"
    zombieString.replace(/u/g, 'rrrrRr').replace(/U/g, 'rrrrRr');

    // 8. "r" or "R' is replaced by "RR"
    zombieString.replace(/(?!(rh\b))r/gi, 'RR');

    return zombieString;

  };

  function zombify(){






    $('#zombie').val($('#english').val());
  }

  return Zombify;

});
