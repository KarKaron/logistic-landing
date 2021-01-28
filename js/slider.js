$(function() {
  // Owl Carousel
  var partners = $(".partners");
  partners.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      },
      1280:{
        items:4
      }
    }
  });

  var orders = $("#fastOrdersCard");
  orders.owlCarousel({
    items: 2,
    loop: true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      }
    }
  });

});
