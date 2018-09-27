$(document).ready(function() {

	// Заказ имя
	$('.cart-contacts input[name="name"]').keyup(function(){
		if($('#sale_order_props input[name="ORDER_PROP_1"]').val() == ''){
			$('#sale_order_props input[name="ORDER_PROP_1"]').val($('.cart-contacts input[name="name"]').val());
		}
	});
	
	// Заказ телефон
	$('.cart-contacts input[name="phone"]').keyup(function(){
		$('#sale_order_props input[name="ORDER_PROP_3"]').val($('.cart-contacts input[name="phone"]').val());
	});
	
	// Заказ email
	$('.cart-contacts input[name="email"]').keyup(function(){
		$('#sale_order_props input[name="ORDER_PROP_2"]').val($('.cart-contacts input[name="email"]').val());
	});
	
	// Заказ индекс
	$('.cart-contacts input[name="zip"]').keyup(function(){
		$('#sale_order_props input[name="ORDER_PROP_4"]').val($('.cart-contacts input[name="zip"]').val());
	});
	
	// Заказ дата доставки
	$('.cart-contacts input[name="date_delivery"]').change(function(){
		var date_deliv = $('.cart-contacts input[name="date_delivery"]').val();
		date_deliv = date_deliv.split('-');
		$('#sale_order_props input[name="ORDER_PROP_8"]').val(date_deliv[2] + '.' + date_deliv[1] + '.' + date_deliv[0]);
	});
	
	// Заказ время доставки часы
	$('.cart-contacts select[name="time_delivery"]').change(function(){
		$('#sale_order_props input[name="ORDER_PROP_9"]').val($('.cart-contacts select[name="time_delivery"]').val());
	});
	
	// Заказ время доставки минуты
	$('.cart-contacts select[name="minut_delivery"]').change(function(){
		$('#sale_order_props input[name="ORDER_PROP_12"]').val($('.cart-contacts select[name="minut_delivery"]').val());
	});
	
	$('.cart-contacts select[name="adr_del"]').change(function(){
		$('#sale_order_props input[name="ORDER_PROP_10"]').val($('.cart-contacts select[name="adr_del"]').val());
	});
	
	// Доставка
	$(".cart-payment__methods .cart-payment__method").click(function(){
		$('#order_form_content #ID_PAY_SYSTEM_ID_' + $(this).attr('attr-pay')).prop('checked', true);
		$('.cart-payment__image').css('background', '#fff');
		$(this).find('.cart-payment__image').css('background', '#c59708');
		
		if($(this).attr('attr-deliv') == 0) {
			$('.or-del-price').text('Бесплатно');
			$('.or-del-price-total').text($("span.or-price").attr('data-order-price') + ' ?');
		} else {
                 var summ_t = $("span.or-price").attr('data-order-price');
                 var summ_s;
                 if(Number(summ_t) > 349) {
                  $('.or-del-price').text("Бесплатно");
                    summ_s = Number(summ_t);                  
                 } else {
                    $('.or-del-price').text("100 ?");
                    summ_s = Number(summ_t) + 100;
                 }

             $('.or-del-price-total').text(summ_s + ' ?');
             //$('.or-del-price-total').text($(this).attr('attr-del-total') + ' ?'); 
        }
	});
	
	$('.cart-contacts input[name="country"], .cart-contacts input[name="city"], .cart-contacts input[name="street"], .cart-contacts input[name="building"], .cart-contacts input[name="apartment"]').keyup(function(){
		var country = $('.cart-contacts input[name="country"]').val();
		var city = $('.cart-contacts input[name="city"]').val();
		var street = $('.cart-contacts input[name="street"]').val();
		var building = $('.cart-contacts input[name="building"]').val();
		var apartment = $('.cart-contacts input[name="apartment"]').val();
		var result_adres = country + ', ' + city + ', ' + street + ', ' + building + ', ' + apartment;
		$('#sale_order_props textarea[name="ORDER_PROP_7"]').val(result_adres);
	});
	
	$('.bx_ordercart_order_pay textarea[name="ORDER_DESCRIPTION"]').val('default');
	$('.cart-contacts textarea[name="additional"]').val(' ');
	
	$('.cart-contacts textarea[name="additional"]').keyup(function(){
		$('.bx_ordercart_order_pay textarea[name="ORDER_DESCRIPTION"]').val($('.cart-contacts textarea[name="additional"]').val());
		if($('.cart-contacts textarea[name="additional"]').val() == ''){
			$('.bx_ordercart_order_pay textarea[name="ORDER_DESCRIPTION"]').val('default');
			$('.cart-contacts textarea[name="additional"]').val(' ');
		}
	});

	$('#sale_order_props input[name="ORDER_PROP_6"]').val(129);
	
	$('.widget__inner_cust .input-checkbox').click(function(){
		$(this).parent().find('.input-checkbox').removeClass('checked');
		$(this).addClass('checked');
	});
	
	// Скролл банкета
        var h_hght = 200; // высота шапки
        var h_mrg = 0;    // отступ когда шапка уже не видна
                         
        $(function() {
         
            var elem = $('.page-content_conf .page-sidebar');
            var top = $(this).scrollTop();
             
            if(top > h_hght){
                elem.css('top', h_mrg);
            }           
             
            $(window).scroll(function(){
                top = $(this).scrollTop();
                 
                if (top+h_mrg < h_hght) {
                    elem.css('top', (h_hght-top));
                } else {
                    elem.css('top', h_mrg);
                }
            });
         
        });
	
	// Маска времени формы
    $.mask.definitions['H'] = "[0-2]";
    $.mask.definitions['h'] = "[0-9]";
    $.mask.definitions['M'] = "[0-5]";
    $.mask.definitions['m'] = "[0-9]";
    $("input[name=form_text_27]").focusin(function(event) {
        $(event.target).css({"fontSize":"18px","textTransform":"none"});
    });
    $(".form-banket-time-input").mask("Hhч : Mmмин", {
        "placeholder": "OOч : OOмин",
        completed: function() {
            var currentMask = $(this).mask();
            if (isNaN(parseInt(currentMask))) {
                $(this).val("");
            } else if (parseInt(currentMask) > 2359) {
                $(this).val("23ч : 59мин");
            };
        }
    });
	
	// Ручной ввод количества
	$('.input-number__input').on('keyup', function(e) {
		if(e.key.match(/[^0-9'".]/)){
			$(this).val('');
		} else {			
			var summ = 0;			
			$('.configurator .calen_div_each').each(function(i, elem) {
				summ = parseInt(summ) + (parseInt($(this).find('.calen_div_right_price span').text()) * parseInt($(this).find('.input-number__input').val()));
			});

			$('.configurator').find('.calen_user_summ span').text(summ);
			$('.configurator').find('.calen_user_summ .hidden_config').val(summ);
		}
	});
	
	// Банкет доп услуги
	$('.conf_s .icons-list__item').click(function() {
		if($(this).hasClass('conf_s_active')){
			$(this).removeClass('conf_s_active');
			var summ_dop = $('.configurator').find('.calen_user_summ span').text();
			var summ_dop_input = $('.configurator').find('.calen_user_summ .hidden_config').val();
			summ_dop = parseInt(summ_dop_input) - parseInt($(this).attr('attr-price'));
			summ_dop_input = parseInt(summ_dop_input) - parseInt($(this).attr('attr-price'));
			$('.configurator').find('.calen_user_summ span').text(summ_dop);
			$('.configurator').find('.calen_user_summ .hidden_config').val(summ_dop_input);
		}else{
			$(this).addClass('conf_s_active');
			var summ_dop = $('.configurator').find('.calen_user_summ span').text();
			var summ_dop_input = $('.configurator').find('.calen_user_summ .hidden_config').val();
			summ_dop = parseInt(summ_dop_input) + parseInt($(this).attr('attr-price'));
			summ_dop_input = parseInt(summ_dop_input) + parseInt($(this).attr('attr-price'));
			$('.configurator').find('.calen_user_summ span').text(summ_dop);
			$('.configurator').find('.calen_user_summ .hidden_config').val(summ_dop_input);
		}
	});
	
	// Страница отправки
	if($('.section__title_calen_cust').text() != ''){
		$('.form_number_3').val('конфигуратор: ' + $('.section__title_calen_cust').text().replace(/\s{2,}/g, ' '));
	}
	
	// Пауза при закрытии видео
	$('.modal-video').click(function(){
		$('video').trigger('pause');
	});

	
	// деталка, добавление в корзину
	$('.add_basket_element').click(function(){

        $(this).addClass('loading');
		var t = $(this);

        //тут логика добавления в корзину
		$.ajax({
			url: '/local/ajax/ajax_add_basket.php',
			type: 'post',
			data: {'id': $('.count_tovar_id').val(), 'count': $('.count_tovar_hidden').val()},
			dataType: 'json',
			success: function(data) {
				console.log(data);
				$(this).removeClass('loading');
				$('[data-cart-amount]').text(data[1]);
				t.after('<div class="add_basket_element_cust">Добавлено</div>');
				t.remove();
			}
		});
    });
	
	// деталка, запись в форму
	$('.input-number__input_change').keyup(function(){
		$('.calen_user_summ span').text($(this).val() * $('.elem-hid_price_tovar').val());
		$('.hidden_config').val($(this).val() * $('.elem-hid_price_tovar').val());
	});
	
	$("#datepicker_banket").datepicker();
	$("#datepicker_order").datepicker({
		dateFormat:'yy-mm-dd',
	});
	
	
	//// Календарь ////

	// Предзагрузка
	if($('.change_day_calendar').val()){
		var arr = $('.change_day_calendar').val();
		var arr_ch = arr.indexOf("calendar");
		var rest = arr.substring(arr_ch + 13, arr_ch + 23);
		rest = rest.split('-');
		rest = rest[2] + '.' + rest[1] + '.' + rest[0];
		
		$.ajax({
			url: '/local/ajax/add_calendar_admin.php',
			type: 'post',
			data: {'dt': rest, 'sect': $('.change_day_sect').val(), 'check': 'day_now', 'iblock': $('.change_day_iblock').val()},
			dataType: 'json',
			success: function(data){
				$('.configurator__row_not_all').html('');
				$('.configurator__row_not_all').append(data[0]);
			}
		});
	}

	// Календарь, пользователь, клик по кнопке добавления в корзину
	$('.calendar_cart').click(function(){
		$(this).addClass('loading');
		
		var result = {};
		var cart_now = $(this).prev().prev().find('.calen_div_each');
		
		// Добавление в корзину
		$(cart_now).each(function(i,elem){
			
			if($(this).find('.checkbox_quan').val() > 0){
				result[$(this).find('.hidden_cart_calendar').val()] = $(this).find('.checkbox_quan').val();
			}
			
		});

		$.ajax({
			url: '/local/ajax/add_calendar_basket.php',
			type: 'post',
			data: result,
			dataType: 'json',
			success: function(data){
				$('body,html').animate({scrollTop: 0}, 500);  
				window.location.reload();
			}
		});
	});
	
	
	// меню пользователь
	$(document).on('click', '.det_ul .active_days', function(){
		
		//класс для шапки
		$(this).addClass('active').siblings().removeClass('active')
		
		//класс для контента
		.closest('div.detail_nomin').find('div.det_content').removeClass('active').eq($(this).index()).addClass('active');	
		
		
		$(this).parent().find('.active_days').removeClass('border_day');
		$(this).addClass('border_day');
		
		var thiis = $(this).parent().parent();
		console.log($(this).parent().parent().find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text());
		var dte = $(this).parent().parent().find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text();
		var arr_dte = dte.split(' ');
		var arr_month = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		var arr_dat = $(this).attr('data-week').split('.');
		$(this).parent().parent().find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text(arr_dte[0] + ' ' + arr_dat[0] + ' ' + arr_month[parseInt(arr_dat[1])]);
		
		$.ajax({
		url: '/local/ajax/add_calendar_admin.php',
		type: 'post',
		data: {'dt': $(this).attr('data-week'), 'sect': $('.change_day_sect').val(), 'check': 'user_days', 'iblock': $('.change_day_iblock').val()},
		dataType: 'json',
		success: function(data){
			$('.det_content_cust.active .conf_user_day').html('');
			$('.det_content_cust.active .conf_user_day').append(data[0]);
			
			// Пользователь, обнуление суммы над кнопкой корзины при переключении дней
			$('.calen_user_summ span').text(0);
			
			if(data[6]){
				thiis.find('.det_content.det_content_cust .calen_user_summ').removeClass('displ_nn');
				thiis.find('.det_content.det_content_cust .calen_user_summ').addClass('displ_bl');
				thiis.find('.det_content.det_content_cust .calendar_cart').removeClass('displ_nn');
				thiis.find('.det_content.det_content_cust .calendar_cart').addClass('displ_bl');				
			}else{
				thiis.find('.det_content.det_content_cust .calen_user_summ').removeClass('displ_bl');
				thiis.find('.det_content.det_content_cust .calen_user_summ').addClass('displ_nn');
				thiis.find('.det_content.det_content_cust .calendar_cart').removeClass('displ_bl');
				thiis.find('.det_content.det_content_cust .calendar_cart').addClass('displ_nn');				
			}
		}
	});
	});
	
	// меню на день, клик по календарю
	$(document).on('click', '.day-contents', function(){
		
		var thiis = $(this);
		
		// Получение даты из строки
		var arr = $(this).parents().attr('class');
		var arr_ch = arr.indexOf("calendar");
		var rest = arr.substring(arr_ch + 13, arr_ch + 23);
		rest = rest.split('-');
		var dt_block = rest;
		rest = rest[2] + '.' + rest[1] + '.' + rest[0];
		
		/*var now = new Date();
		var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();		
		var other = new Date(parseInt(dt_block[0]), parseInt(dt_block[1]) - 1, parseInt(dt_block[2])).valueOf();
		var check_day_calen = true;
		
		if(other < today){
			check_day_calen = false;
		}
		
		if(check_day_calen){*/
			// Запись в hidden и в текущую дату админа
			$('.change_day_calendar').val(arr);
			$('.date_tek').text('');
			$('.date_tek').text('Выбранный день: ' + rest);

			// Рамка в календаре
			$(this).parents().parents().parents().find('.day-contents').css('border', 'none');
			$(this).css('border', '1px solid #aeaeae');
			
			$.ajax({
				url: '/local/ajax/add_calendar_admin.php',
				type: 'post',
				data: {'dt': rest, 'sect': $('.change_day_sect').val(), 'check': 'day_now', 'iblock': $('.change_day_iblock').val()},
				dataType: 'json',
				success: function(data){
					
					// Пользователь переключение рамок в неделе
					var all_week_day = thiis.closest('body');
					var this_week_day = thiis.closest('body').find('.detail_nomin .det_ul_cust [data-week="' + rest + '"]');				
					all_week_day.find('.detail_nomin .det_ul_cust li').removeClass('border_day');
					this_week_day.addClass('border_day');
					
					// Вывод админ
					$('.configurator__row_not_all').html('');
					$('.configurator__row_not_all').append(data[0]);
					
					// Вывод пользователь
					all_week_day.find('.det_content_cust.active .conf_user_day').html('');
					all_week_day.find('.det_content_cust.active .conf_user_day').append(data[3]);
					
					// Берем строку с днем недели и датой
					var dte = all_week_day.find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text();
					// Разбиваем
					var arr_dte = dte.split(' ');
					// Массив дней недели
					var arr_week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
					// Массив месяцев
					var arr_month = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
					// Получение дня недели из рамки
					var day_week = thiis.parent().attr('class').substr(-1);
					// Получение дня
					var day_day = rest.split('.');
					
					all_week_day.find('.detail_nomin .det_ul_cust').html('');
					all_week_day.find('.detail_nomin .det_ul_cust').append(data[4]);
					
					// Замена дня недели и месяца у пользователя
					all_week_day.find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text(arr_week[day_week] + ' ' + day_day[0] + ' ' + arr_month[parseInt(day_day[1])]);

					// Скрытие кнопки покупки
					/*all_week_day.find('.calen_user_summ').css('display', 'none', 'important');
					all_week_day.find('.calendar_cart').css('display', 'none', 'important');
					all_week_day.find('.calen_user_not').css('display', 'none', 'important');*/
					
					if(data[6]){
						all_week_day.find('.det_content.det_content_cust .calen_user_summ').removeClass('displ_nn');
						all_week_day.find('.det_content.det_content_cust .calen_user_summ').addClass('displ_bl');
						all_week_day.find('.det_content.det_content_cust .calendar_cart').removeClass('displ_nn');
						all_week_day.find('.det_content.det_content_cust .calendar_cart').addClass('displ_bl');				
					}else{
						all_week_day.find('.det_content.det_content_cust .calen_user_summ').removeClass('displ_bl');
						all_week_day.find('.det_content.det_content_cust .calen_user_summ').addClass('displ_nn');
						all_week_day.find('.det_content.det_content_cust .calendar_cart').removeClass('displ_bl');
						all_week_day.find('.det_content.det_content_cust .calendar_cart').addClass('displ_nn');				
					}
				}
			});
		//}
	});
	
	// Удаление блюда - админ
	$(document).on('click', '.delete_calen_menu', function(){
		var arr = $('.change_day_calendar').val();
		var arr_ch = arr.indexOf("calendar");
		var rest = arr.substring(arr_ch + 13, arr_ch + 23);
		rest = rest.split('-');
		rest = rest[2] + '.' + rest[1] + '.' + rest[0];
		
		var thiss = $(this);
		thiss.addClass('loading');
		
		$.ajax({
			url: '/local/ajax/add_calendar_admin.php',
			type: 'post',
			data: {'check': 'del_menu', 'id_elem': $(this).attr('attr-id-calen'), 'sect': $('.change_day_sect').val(), 'iblock': $('.change_day_iblock').val(), 'dt': rest},
			dataType: 'json',
			success: function(data){
				$('.configurator__row_not_all').html('');
				$('.configurator__row_not_all').append(data[0]);
				
				thiss.removeClass('loading');
				
				$('.header_add_del_admin').text('');
				$('.header_add_del_admin').css('display', 'block');
				$('.header_add_del_admin').text('Товар удален из меню ' + data[1] + ' на ' + rest);
				
				setTimeout(function(){
					$('.header_add_del_admin').css('display', 'none');
				}, 2000);
			}
		});
	});
	
	// Добавление блюда - админ
	$(document).on('click', '.add_calen_menu', function(){
		var arr = $('.change_day_calendar').val();
		var arr_ch = arr.indexOf("calendar");
		var rest = arr.substring(arr_ch + 13, arr_ch + 23);
		rest = rest.split('-');
		rest = rest[2] + '.' + rest[1] + '.' + rest[0];
		
		var admin_add_check = $(this).parent().find('.calen_div_each');
		var result_check = [];
		
		$(admin_add_check).each(function(i,elem){

			if($(this).find('.calen_div_right_admin_check').prop('checked')){
				result_check.push($(this).find('.calen_div_right_admin_check').attr('attr-id-calen'));
			}
			
		});
		
		$.ajax({
			url: '/local/ajax/add_calendar_admin.php',
			type: 'post',
			data: {'check': 'add_menu', 'id_elem': result_check, 'sect': $('.change_day_sect').val(), 'iblock': $('.change_day_iblock').val(), 'dt': rest},
			dataType: 'json',
			success: function(data){
				$('.configurator__row_not_all.day_today').html('');
				$('.configurator__row_not_all.day_today').append(data[0]);

				$('body,html').animate({scrollTop: 0}, 500);
				
				$('.header_add_del_admin').text('');
				$('.header_add_del_admin').css('display', 'block');
				$('.header_add_del_admin').text('Товары добавлены в меню ' + data[1] + ' на ' + rest);
				
				setTimeout(function(){
					$('.header_add_del_admin').css('display', 'none');
				}, 2000);
			}
		});
	});   
});