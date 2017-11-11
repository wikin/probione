$(function() {

  if(window.innerWidth<768){

    $('.row').flexslider({
      animation: "slide",
      selector: ".nazory > .col-sm-4",
      animationLoop: false,
      slideshow: false,
      itemMargin: 0,
      controlNav: false,
      itemWidth: '100%',
      prevText:'',
      nextText:''
    });
  }
});