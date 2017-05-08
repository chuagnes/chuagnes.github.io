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
   Background picture randomizer! This affects 
   .jumbotron CSS class!
   ************************************************* */
function randomHero() {
  var heroPics = ['http://res.cloudinary.com/jescobedo/image/upload/v1480457735/bg1.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457735/bg2.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457735/bg3.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457741/bg4.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457735/bg5.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457735/bg6.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457740/bg7.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457740/bg8.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457738/bg9.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457738/bg10.jpg', 'http://res.cloudinary.com/jescobedo/image/upload/v1480457738/bg11.jpg'];

  $('.jumbotron').css({
    'background': 'url(' + heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
    'background-position': 'center center',
    'background-attachment': 'fixed',
    'background-size': 'cover',
    'color': 'white'
  });
}

randomHero();

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