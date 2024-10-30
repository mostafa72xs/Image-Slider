
$(document).ready(function(){
  $('.container').slick({
    dots: true,
    infinite: true,
    arrows:true, 
    draggable: true,
    speed: 300,
    prevArrow: $('.pervarro'), 
    nextArrow: $('.nextarro'), 
    appendDots: $(".dotss"),
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed: 4000,
    pauseOnHover:true,
  });
});