(function ($) {
	$(document).ready(function () {
		"use strict";


		// HOVER TOGGLE
		$('.side-navigation .menu ul li a').on('click', function (e) {
			$(this).parent().children('.side-navigation .menu ul li ul').slideToggle(300);
			return true;
		});



		// CONTACT FORM INPUT LABEL
		function checkForInput(element) {
			const $label = $(element).siblings('span');
			if ($(element).val().length > 0) {
				$label.addClass('label-up');
			} else {
				$label.removeClass('label-up');
			}
		}

		$('input, textarea').each(function (e) {
			checkForInput(this);
		});

		$('input, textarea').on('change keyup', function (e) {
			checkForInput(this);
		});



		// TOOLTIP
		$('[data-toggle="tooltip"]').tooltip()



		// PARALLAX
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive: true
		});



		// DROPDOWN
		$('.dropdown-toggle').dropdown()



		// HAMBURGER
		$('.hamburger').on('click', function (e) {
			$(this).toggleClass('open');
			$('body').toggleClass('overflow');
			$('.side-navigation').toggleClass('active');
		});



		// DATA BACKGROUND IMAGE
		var pageSection = $("*");
		pageSection.each(function (indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});



		// PAGE TRANSITION
		$('body a').on('click', function (e) {
			if (typeof $(this).data('fancybox', 'filter') == 'undefined') {
				e.preventDefault();
				var url = this.getAttribute("href");
				if (url.indexOf('#') != -1) {
					var hash = url.substring(url.indexOf('#'));


					if ($('body ' + hash).length != 0) {
						$('.transition-overlay').removeClass("active");
						$(".hamburger").toggleClass("open");
						$(".navigation-menu").removeClass("active");


						$('html, body').animate({
							scrollTop: $(hash).offset().top
						}, 1300);

					}
				}
				else {
					$('.transition-overlay').toggleClass("active");
					setTimeout(function () {
						window.location = url;
					}, 1300);

				}
			}
		});






	});



	// COUNTER
	$(document).scroll(function () {
		$('.odometer').each(function () {
			var parent_section_postion = $(this).closest('section').position();
			var parent_section_top = parent_section_postion.top;
			if ($(document).scrollTop() > parent_section_top - 300) {
				if ($(this).data('status') == 'yes') {
					$(this).html($(this).data('count'));
					$(this).data('status', 'no')
				}
			}
		});
	});




	/* GALLERY SLIDER */
	var swiper = new Swiper('.gallery-container', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.gallery-pagination',
			clickable: true,
		},
	});




	// SLIDER
	var swiper = new Swiper('.slider-container', {
		touchRatio: 0,
		loop: true,
		speed: 600,
		effect: "fade",
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
	});




	// MASONRY
	$(window).load(function () {
		$('.gallery').isotope({
			itemSelector: '.gallery li',
			percentPosition: true
		});
	});



	// ISOTOPE FILTER
	var $container = $('.gallery');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('.gallery-filter li a').click(function () {
		$('.gallery-filter li a.current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});



	// WOW ANIMATION 
	wow = new WOW(
		{
			boxClass: 'wow',      // default
			animateClass: 'animated', // default
			offset: 100,          // default
			mobile: true,       // default
			live: true        // default
		}
	)
	wow.init();



	// PRELOADER
	// $(window).load(function () {

	// 	$("body").addClass("page-loaded");
	// });

	$(window).on('load', function () {
		$("body").addClass("page-loaded");
		// setTimeout(function () {
		// 	$("body").addClass("page-loaded");
		// }, 2000); 
	});
	

	window.onload = function () {

		var wrapper = document.querySelector('.preloader svg')
		wrapper.classList.add('active')


	};


})(jQuery);


// ========= products enq =====
// function load_function(t){setTimeout(function(){$(document).ready(function(){$("#exampleModal").find("#someInputs").val(t)})},100)};
$(function () {
	$("#product_inquiry").load("enquiry-now.php");
});


$(function () {
	$("#redevelopment_inquiry").load("redevelopment-panel.php");
});

// $(function(){
// 	$("#product_inquiry").load("enquiry-now.php"); 
// }); 

function load_function(t) { setTimeout(function () { $(document).ready(function () { $("#download_brochure").find("#someInput").val(t) }) }, 100) };

// gallery
var sliderThumbnail = new Swiper(".slider-thumbnail", {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

//スライダー
var slider = new Swiper(".slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    thumbs: {
        swiper: sliderThumbnail
    }
});



// Get the navbar element
const navbar = document.getElementById("navbar");

let prevScrollPos = window.scrollY;
console.log("prevScrollPos",prevScrollPos)
// Function to handle scrolling
window.addEventListener("scroll", function() {
	
    const currentScrollPos = window.scrollY;
  console.log("currentScrollPos",currentScrollPos)
    if (prevScrollPos > currentScrollPos) {
        // Show the navbar if scrolling up
		console.log("scrollup")
        navbar.style.top = "0";
    } else if (prevScrollPos < currentScrollPos){
        // Hide the navbar if scrolling down
		console.log("scrolldown")
        navbar.style.top = "-90px"; // Adjust the value to control how much the navbar disappears
    }else{
		navbar.style.top = "0";
	}

    prevScrollPos = currentScrollPos;
});


 