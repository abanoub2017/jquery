$(document).ready(function(){

  $(".click").click(function(){
      $(".menu" ).toggleClass("sidemenu" );
      $(".contet-menu" ).toggleClass("opacity" );
      $( "body").toggleClass("bg");
      $( "body").toggleClass("margin-left-menu");
      $(".x").toggleClass("hide");
      $(".y").toggleClass("show");
  })

});

