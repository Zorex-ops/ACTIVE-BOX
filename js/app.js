

 $(function() {

/* HEADER FIXED*/

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

/*  NAV TOGGLE*/
	let nav = $("#nav");
	let navToggle = $("#navToggle");



	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
		
	});

	function checkScroll(){
		if(scrollPos >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/*PLAVN SCROL*/

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top; 

		nav.removeClass('show');

		$("html, body").animate({
			scrollTop : elementOffset -45
		},700);

	});






	/*  NAV TOGGLE*/


	


		navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass('show');

	});



/*     REVIEWS SLIDER   */

	let slider = $("#reviewsSlider");

	slider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	arrows: false,
	dots: true
});



});

/*
$(function() {

	var header = $(".header"),
		 introH = $(".intro").innerHeight(),
		 scrollOffset = $(window).scrollTop();


		 /*header fixed*/
		 /*
		 checkScroll(scrollOffset)

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

		
	});

	function checkScroll(scrollOffset){
		if(scrollOffset >= introH) {
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	}

	});

	*/
