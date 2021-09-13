jQuery(document).ready(function(){
  // Add smooth scrolling to all links
  jQuery("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// If this doesn't work, do this:

jQuery(document).ready(function(){
    jQuery( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: jQuery(jQuery(this).attr("href")).offset().top }, 500);
    });
});

// Element to click should be an a element & have the class scrollLink.