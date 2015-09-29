requirejs.config({
  "baseUrl": "js/app",
  "paths": {
    "jquery": "../vendors/jquery.min",
    "bootstrap": "../vendors/bootstrap.min"
  },
  "shim": {
    "bootstrap": ["jquery"]
  }
});

require(['main']);

$(document).ready(function(){
  $('#zombie-to-english-btn').click(function(event){
    unzombify();
    return false;
  });

  $('#english-to-zombie-btn').click(function(event){
    zombify();
    return false;
  });

  

  function unzombify(){


  }

  $('#english').on("keyup", zombify);

});
