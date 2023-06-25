
  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 66
          }, 1000);
        }
      }
    });
    

    //SLIDESHOW IMAGE
    let slideIndex = 0;
    let timeoutId = null;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    showSlides();
    function currentSlide(index) {
      slideIndex = index;
      showSlides();
    }
    function plusSlides(step) {
      if(step < 0) {
        slideIndex -= 2;
        if(slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
      }
      showSlides();
    }
    
    function showSlides() {
      let i;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }    

      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].classList.add('activeslide');
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(showSlides, 3000); // Change image every 5 seconds
    }

    //VIEW MORE VIEW LESS
    function vMore() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("moreBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
      }
    }

    //CAPATCHA CHECH
    // var allowSubmit = false;

    // function capcha_filled () {
    //   allowSubmit = true;
    // }
    // function capcha_expired () {
    //   allowSubmit = false;
    // }
    
    // function check_if_capcha_is_filled (e) {
    //   if(allowSubmit) return true;
    //   e.preventDefault();
    //   alert('Fill in the capcha!');
    // }
    

  })(window.jQuery);

  
