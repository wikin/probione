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


  if($('.box').length){
    var inview = new Waypoint.Inview({
      element: $('.box')[0],
      entered: function(direction,event) {
        console.log(direction,event)
        $(this.element).addClass('open');
      }
    });
  }

  $('.map').each(function(i, map){

    if(window.SMap){
      var coords = $(map).data('coords').split(',');
      console.log(coords);
      var center = SMap.Coords.fromWGS84.apply(SMap.Coords,coords);
      var m = new SMap(map, center, parseInt($(map).data('zoom'),10)||12, SMap.DEF_BASE);
      m.addMarker(center);     
      if($(map).data('overview')) m.addOverview();
    }
  });

});