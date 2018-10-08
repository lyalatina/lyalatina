
 $(document).ready(function() {
  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) > 100) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
});
 

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load
  ('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

 
