$(function () {

    if (typeof svg4everybody !== 'undefined') {
        svg4everybody();
    }

    if ($.prototype.placeholder) {
        $('input, textarea').placeholder({
            customClass: 'ie-placeholder'
        });
    }

    if ($.prototype.fancybox) {
        $('[data-fancybox]').fancybox({
            thumbs: {
                autoStart: true
            }
        });
    }

    if ($.prototype.datetimepicker) {
        $('.datepicker').datetimepicker({
            format: 'DD.MM.YYYY',
            dayViewHeaderFormat: 'MMMM',
            useCurrent: false,
        });
    }

});

$(document).ready(function ($) {
    $('[data-mask=zip]').mask('999999');
    $('[data-mask=inn]').mask('9999999999');
    $('[data-mask=kpp]').mask('999999999');
    $('[data-mask=rs]').mask('99999999999999999999');
    $('[data-mask=ks]').mask('99999999999999999999');
    $('[data-mask=bik]').mask('999999999');
    $('[data-mask=okpo]').mask('99999999');
    $('[data-mask=phone]').mask('+7 999 999-99-99');
});

$(function () {

    var sticker = new PerfectScrollbar('#sticker');

    $('.slider-common').each(function () {
        $(this).slick({
            arrows: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            easing: 'easeInOutQuart',
            speed: 750,
            draggable: true,
            waitForAnimate: false,
            customPaging: function (slider, i) {
                return '';
            },
        });
    });

   /* $('.slider-responses').each(function () {
        $(this).slick({
            arrows: true,
            vertical: true,
            dots: true,
            speed: 750,
            customPaging: function (slider, i) {
                return '';
            },
        });
    }); */

    $('.slider-home').each(function () {
        $(this).slick({
            arrows: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            easing: 'easeInOutQuart',
            speed: 750,
            draggable: true,
            waitForAnimate: false,
            customPaging: function (slider, i) {
                return '';
            },
        });
    });

});

$(function () {

    var modal = $('#modal-video');
    var modalTemplate = $('#modal-video-template').html();
    var modalContent = $('#modal-video-content');

    Mustache.parse(modalTemplate);

    modal
        .on('show.bs.modal', function (e) {
            modalContent.html(Mustache.render(modalTemplate, {
                src: $(e.relatedTarget).data('src')
            }));
        })
        .on('hidden.bs.modal', function (e) {
            modalContent.html('');
        });

});

$(function () {

    $('#form-login').validate({
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('#form-register').validate({
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('#form-password').validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find('button[type=submit]');

            button.addClass('loading');

            $.post('/post/', form.serialize(), function (result) {
                button.removeClass('loading');

                if (!result.success) {
                    project.showMessageModal('Ошибка', 'При отправке формы произошла ошибка.');
                } else {
                    project.showMessageModal('Восстановление пароля', 'Инструкции по восстановлению пароля отправлены на указанный вами email.');
                }
            }, 'json');
        }
    });

    $('#form-callback').validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find('button[type=submit]');

            button.addClass('loading');

            $.post('/post/', form.serialize(), function (result) {
                button.removeClass('loading');

                if (!result.success) {
                    project.showMessageModal('Ошибка', 'При отправке формы произошла ошибка.');
                } else {
                    project.showMessageModal('Спасибо!', 'Ваша заявка отправлена.<br>Наш менеджер свяжется с вами в ближайшее время.');
                }
            }, 'json');
        }
    });

    $('#form-contacts').validate({
        submitHandler: function (form) {
            form = $(form);

            var button = form.find('button[type=submit]');

            button.addClass('loading');

            $.post('/post/', form.serialize(), function (result) {
                button.removeClass('loading');

                if (!result.success) {
                    project.showMessageModal('Ошибка', 'При отправке формы произошла ошибка.');
                    form.find('input, textarea').val('');
                } else {
                    project.showMessageModal('Спасибо!', 'Ваша заявка отправлена.<br>Наш менеджер свяжется с вами в ближайшее время.');
                    form.find('input, textarea').val('');
                }
            }, 'json');
        }
    });

});

/*$(function () {

    var mapContainer = $('#map');

    if (typeof ymaps !== 'undefined' && mapContainer.length) {

        ymaps.ready(function () {
            var map, point = ymaps.geocode(mapContainer.data('address'));

            point.then(
                function (res) {
                    var finishPoint = res.geoObjects.get(0).geometry.getCoordinates();

                    map = new ymaps.Map('map', {
                        center: finishPoint,
                        zoom: 16,
                        controls: []
                    });

                    map.behaviors.disable('scrollZoom');
                    map.controls.add('zoomControl');

                    var placemark = new ymaps.Placemark(finishPoint);

                    map.geoObjects.add(placemark);
                }
            );
        });

    }

});*/

$(function () {
	$('.article .article__image img').each(function() {
		$(this).parent().css({
			'background-image': 'url("'+$(this).attr('src')+'")',
			'background-repeat': 'no-repeat',
			'background-position': '50% 50%',
			'background-size': 'contain'
		});
	});
	if ( $('.facts').length && $('title').text().indexOf('Новости') == 0 ) {
		$('.page-main').addClass('page-main_news');
	} else {
		$('.facts').remove();
	}
	
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:940px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}
	function banquetGrid() {
		setTimeout(function() {
			$('.form-banquet__column').eq(0).css({
				'-webkit-transform': 'translateY(0)',
				'transform': 'translateY(0)'
			})
			var base = $('.form-banquet__column').eq(1).find('.form-group:last-child').offset().top;
			var first = $('.form-banquet__column').eq(0).find('.form-group:last-child').offset().top;
			var diff = base-first;
			console.log(first,base,diff);
			if ( Modernizr.mq('(min-width:975px)') ) {
				$('.form-banquet__column').eq(0).css({
					'-webkit-transform': 'translateY('+diff+'px)',
					'transform': 'translateY('+diff+'px)'
				});
			}
		}, 100);
	}
	if ( $('.form-banquet__content').length ) {
		banquetGrid();
	}
	function startApp() {
		detectDevice();
		if ( justSwitched ) {
			if ( isMobile ) {
				if ( !$('.page-index').length ) {
					$('.top-header .header__cart').clone().prependTo($('.top-header'));
					$('.top-header .header__profile').addClass('is-centered');
				}
			} else {
				if ( !$('.page-index').length ) {
					$('.top-header .header__cart').remove();
					$('.top-header .header__profile').removeClass('is-centered');
				}
			}
		}
		if ( $('.form-banquet__content').length ) {
			banquetGrid();
		}
	}
	startApp();
	var lastWidth = $(window).width();
	$(window).on('resize', _.debounce(function() {
		if ( $(window).width() != lastWidth ) {
			startApp();
			lastWidth = $(window).width();
		}
	}, 100));
});