(function($){
	"use strict";

	// show right menu
	$('.js-menu').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		showMenu();
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.nav--active').length) {
			if ($('.nav--active').length && !$('body').hasClass('fancybox-active')) {
				hideMenu();
			}
		}
	});

	// open modal
	$('.js-nav-item').on('click', function(e) {
		$(this).siblings('.nav-main__item').removeClass('nav-main__item--active');
		$(this).addClass('nav-main__item--active');
		var thisHref = $(this).attr('href');
		$.fancybox.open({
			src  : thisHref,
			type : 'inline',
			opts : {
				touch: false,
				lang : 'ru',
				i18n : {
					'ru' : {
						CLOSE: 'Закрыть',
						ERROR: 'Невозможно загрузить данные. Попробуйте еще раз.',
					}
				},
				afterClose: function() {
					$('.js-nav-item').removeClass('nav-main__item--active');
				}
			},
		});
	});
	$('.js-modal-link').on('click', function() {
		$.fancybox.close();
		var thisHref = $(this).attr('href');
		$.fancybox.open({
			src  : thisHref,
			type : 'inline',
			opts : {
				touch: false,
				lang : 'ru',
				i18n : {
					'ru' : {
						CLOSE: 'Закрыть',
						ERROR: 'Невозможно загрузить данные. Попробуйте еще раз.',
					}
				},
				animationEffect: "zoom",
				afterClose: function() {
					$('.nav-main .nav-main__item').removeClass('nav-main__item--active');
				}
			},
		});
	});
   
	function showMenu() {
		if (!$('.nav__cover').length) $('body').prepend('<div class="nav__cover"></div>');
		$('html').addClass('no-scroll');
		$('.nav').addClass('nav--active');
	}
	function hideMenu() {
		if ($('html').hasClass('no-scroll')) $('html').removeClass('no-scroll');
		if ($('.nav__cover').length) {
			$('.nav__cover').remove();
		}
		$('.nav').removeClass('nav--active');
		$('.nav').addClass('nav--hide');
		setTimeout(function() {
			$('.nav').removeClass('nav--hide');
		}, 1000);
	}
})(jQuery);