/* ************************************************* 
   Navbar opacity transition - transition pixel set
   point is below! 
   ************************************************* */
$(window).scroll(function() {
  if ($(this).scrollTop() > 2) { // <--- adjust pixel point here
    $('.navbar-fixed-top').addClass('opaque');
  } else {
    $('.navbar-fixed-top').removeClass('opaque');
  }
});


/* ************************************************* 
   Scrolling animation!
   ************************************************* */
$(".navbar-nav li a[href^='#']").on('click', function(e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000, function() {

    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash;
  });

});