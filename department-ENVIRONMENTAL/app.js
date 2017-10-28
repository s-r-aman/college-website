$('.menu-toggle').click(function() {

  $('.side-nav').toggleClass('side-nav--open',200);
  $('.menu-toggle').toggleClass('menu-toggle--open');

});


$('.content').hide();
$('.lab').on('click', function(){
  if(!($(this).children('.content').is(':visible'))){
    $('.content').slideUp();
    $(this).children('.content').slideDown();
  } else {
    $('.content').slideUp();
  }
});
