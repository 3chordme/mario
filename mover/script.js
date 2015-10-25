$(document).ready(function(){
    $(this).keydown(function(k){
      console.log(k.keyCode);
      if (k.keyCode === 37) {//left
        $('div').animate({left:'-=10px'},150);
        $('img').addClass('.left');  //not working
      }
      if (k.keyCode === 38) {//up
        $('div').animate({top:'-=10px'},150);
      }
      if (k.keyCode === 40) {//down
        $('div').animate({top:'+=10px'},150);
      }
      if(k.keyCode === 39) {//right
        $('div').animate({left:'+=10px'},150);
        $('img').removeClass('.left'); //not working either
      }


    });
});
