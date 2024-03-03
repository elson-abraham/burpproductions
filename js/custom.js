(function ($) {
  "use strict";

  // AOS ANIMATIONS
  AOS.init();

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").delay(500).slideUp("slow"); // set duration in brackets
  });

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // NEWS IMAGE RESIZE
  function NewsImageResize() {
    $(".navbar").scrollspy({ offset: -76 });

    var LargeImage = $(".large-news-image").height();

    var MinusHeight = LargeImage - 6;

    $(".news-two-column").css({ height: MinusHeight - LargeImage / 2 + "px" });
  }

  $(window).on("resize", NewsImageResize);
  $(document).on("ready", NewsImageResize);

  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 66,
          },
          1000
        );
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
  // function plusSlides(step) {
  //   if(step < 0) {
  //     slideIndex -= 2;
  //     if(slideIndex < 0) {
  //       slideIndex = slides.length - 1;
  //     }
  //   }
  //   showSlides();
  // }

  function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("activeslide");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 1000); // Change image every 1 seconds
  }

	//Dark and Light mode Button
  
	/**
 * Change the text of a button
 * @param {el} object HTMLElement: button to change text of
 * @param {dText} string: default text
 * @param {nText} string: new text
 **/
	function changeText(el, dText, nText) {
		var content = '',
			context = '';

		/**
		 * Set the text of a button
		 *     - dependant upon current text
		 **/
		function setText() {
			return (content === dText) ? nText : dText;
		}

		/* Check to see if the browser accepts textContent */
		if ('textContent' in document.body) {
			context = 'textContent';
			/* Get the current button text */
			content = el[context];
			/* Browser does NOT use textContent */
		} else {
			/* Get the button text with fallback option */
			content = el.firstChild.nodeValue;
		}

		/* Set button text */
		if (context === 'textContent') {
			el.textContent = setText();
		} else {
			el.firstChild.nodeValue = setText();
		}
	}

	var defaultText,
		substituteText,
		btn;

	/* Default text of the button */
	defaultText = 'Light Mode';
	/* Alternate text for button */
	substituteText = 'Dark Mode';
	/* Grab our button */
	btn = document.querySelector('.toggleMode');

	/* Add a listener to the button instance so we can manipulate it */
	btn.addEventListener('click', function () {
		var element = document.body;
		element.classList.toggle("light-mode");
		
		changeText(this, defaultText, substituteText);
	}, false);


})(window.jQuery);