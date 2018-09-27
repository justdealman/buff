$(document).ready(function() {

	// Р—Р°РєР°Р· РёРјСЏ
	$('.cart-contacts input[name="name"]').keyup(function(){
		if($('#sale_order_props input[name="ORDER_PROP_1"]').val() == ''){
			$('#sale_order_props input[name="ORDER_PROP_1"]').val($('.cart-contacts input[name="name"]').val());
		}
	});
	
	// Р—Р°РєР°Р· С‚РµР»РµС„РѕРЅ
	$('.cart-contacts input[name="phone"]').keyup(function(){
		$('#sale_order_props input[name="ORDER_PROP_3"]').val($('.cart-contacts input[name="phone"]').val());
	});
	
	// Р—Р°РєР°Р· email
	$('.cart-contacts input[name="email"]').keyup(function(){
		$('#sale_order_props input[name="ORDER_PROP_2"]').val($('.cart-contacts input[name="email"]').val());
	});
	
	// Р—Р°РєР°Р· РёРЅРґРµРєСЃ
	$('.cart-contacts input[name="zip"]').keyup(function(){
		$('#sale_order_props input[name="ORDER_PROP_4"]').val($('.cart-contacts input[name="zip"]').val());
	});
	
	// Р—Р°РєР°Р· РґР°С‚Р° РґРѕСЃС‚Р°РІРєРё
	$('.cart-contacts input[name="date_delivery"]').change(function(){
		var date_deliv = $('.cart-contacts input[name="date_delivery"]').val();
		date_deliv = date_deliv.split('-');
		$('#sale_order_props input[name="ORDER_PROP_8"]').val(date_deliv[2] + '.' + date_deliv[1] + '.' + date_deliv[0]);
	});
	
	// Р—Р°РєР°Р· РІСЂРµРјСЏ РґРѕСЃС‚Р°РІРєРё С‡Р°СЃС‹
	$('.cart-contacts select[name="time_delivery"]').change(function(){
		$('#sale_order_props input[name="ORDER_PROP_9"]').val($('.cart-contacts select[name="time_delivery"]').val());
	});
	
	// Р—Р°РєР°Р· РІСЂРµРјСЏ РґРѕСЃС‚Р°РІРєРё РјРёРЅСѓС‚С‹
	$('.cart-contacts select[name="minut_delivery"]').change(function(){
		$('#sale_order_props input[name="ORDER_PROP_12"]').val($('.cart-contacts select[name="minut_delivery"]').val());
	});
	
	$('.cart-contacts select[name="adr_del"]').change(function(){
		$('#sale_order_props input[name="ORDER_PROP_10"]').val($('.cart-contacts select[name="adr_del"]').val());
	});
	
	// Р”РѕСЃС‚Р°РІРєР°
	$(".cart-payment__methods .cart-payment__method").click(function(){
		$('#order_form_content #ID_PAY_SYSTEM_ID_' + $(this).attr('attr-pay')).prop('checked', true);
		$('.cart-payment__image').css('background', '#fff');
		$(this).find('.cart-payment__image').css('background', '#c59708');
		
		if($(this).attr('attr-deliv') == 0) {
			$('.or-del-price').text('Р‘РµСЃРїР»Р°С‚РЅРѕ');
			$('.or-del-price-total').text($("span.or-price").attr('data-order-price') + ' в‚Ѕ');
		} else {
                 var summ_t = $("span.or-price").attr('data-order-price');
                 var summ_s;
                 if(Number(summ_t) > 349) {
                  $('.or-del-price').text("Р‘РµСЃРїР»Р°С‚РЅРѕ");
                    summ_s = Number(summ_t);                  
                 } else {
                    $('.or-del-price').text("100 в‚Ѕ");
                    summ_s = Number(summ_t) + 100;
                 }

             $('.or-del-price-total').text(summ_s + ' в‚Ѕ');
             //$('.or-del-price-total').text($(this).attr('attr-del-total') + ' в‚Ѕ'); 
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
	
	// РЎРєСЂРѕР»Р» Р±Р°РЅРєРµС‚Р°
        var h_hght = 200; // РІС‹СЃРѕС‚Р° С€Р°РїРєРё
        var h_mrg = 0;    // РѕС‚СЃС‚СѓРї РєРѕРіРґР° С€Р°РїРєР° СѓР¶Рµ РЅРµ РІРёРґРЅР°
                         
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
	
	// РњР°СЃРєР° РІСЂРµРјРµРЅРё С„РѕСЂРјС‹
    $.mask.definitions['H'] = "[0-2]";
    $.mask.definitions['h'] = "[0-9]";
    $.mask.definitions['M'] = "[0-5]";
    $.mask.definitions['m'] = "[0-9]";
    $("input[name=form_text_27]").focusin(function(event) {
        $(event.target).css({"fontSize":"18px","textTransform":"none"});
    });
    $(".form-banket-time-input").mask("HhС‡ : MmРјРёРЅ", {
        "placeholder": "OOС‡ : OOРјРёРЅ",
        completed: function() {
            var currentMask = $(this).mask();
            if (isNaN(parseInt(currentMask))) {
                $(this).val("");
            } else if (parseInt(currentMask) > 2359) {
                $(this).val("23С‡ : 59РјРёРЅ");
            };
        }
    });
	
	// Р СѓС‡РЅРѕР№ РІРІРѕРґ РєРѕР»РёС‡РµСЃС‚РІР°
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
	
	// Р‘Р°РЅРєРµС‚ РґРѕРї СѓСЃР»СѓРіРё
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
	
	// РЎС‚СЂР°РЅРёС†Р° РѕС‚РїСЂР°РІРєРё
	if($('.section__title_calen_cust').text() != ''){
		$('.form_number_3').val('РєРѕРЅС„РёРіСѓСЂР°С‚РѕСЂ: ' + $('.section__title_calen_cust').text().replace(/\s{2,}/g, ' '));
	}
	
	// РџР°СѓР·Р° РїСЂРё Р·Р°РєСЂС‹С‚РёРё РІРёРґРµРѕ
	$('.modal-video').click(function(){
		$('video').trigger('pause');
	});

	
	// РґРµС‚Р°Р»РєР°, РґРѕР±Р°РІР»РµРЅРёРµ РІ РєРѕСЂР·РёРЅСѓ
	$('.add_basket_element').click(function(){

        $(this).addClass('loading');

        //С‚СѓС‚ Р»РѕРіРёРєР° РґРѕР±Р°РІР»РµРЅРёСЏ РІ РєРѕСЂР·РёРЅСѓ
		$.ajax({
			url: '/local/ajax/ajax_add_basket.php',
			type: 'post',
			data: {'id': $('.count_tovar_id').val(), 'count': $('.count_tovar_hidden').val()},
			dataType: 'json',
			success: function(data) {
				console.log(data);
				$(this).removeClass('loading');
				$('[data-cart-amount]').text(data[1]);
				$('.add_basket_element').remove();
				$('.form_elem').append('<div class="add_basket_element_cust">Р”РѕР±Р°РІР»РµРЅРѕ</div>');
			}
		});
    });
	
	// РґРµС‚Р°Р»РєР°, Р·Р°РїРёСЃСЊ РІ С„РѕСЂРјСѓ
	$('.input-number__input_change').keyup(function(){
		$('.calen_user_summ span').text($(this).val() * $('.elem-hid_price_tovar').val());
		$('.hidden_config').val($(this).val() * $('.elem-hid_price_tovar').val());
	});
	
	$("#datepicker_banket").datepicker();
	$("#datepicker_order").datepicker({
		dateFormat:'yy-mm-dd',
	});
	
	
	//// РљР°Р»РµРЅРґР°СЂСЊ ////

	// РџСЂРµРґР·Р°РіСЂСѓР·РєР°
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

	// РљР°Р»РµРЅРґР°СЂСЊ, РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ, РєР»РёРє РїРѕ РєРЅРѕРїРєРµ РґРѕР±Р°РІР»РµРЅРёСЏ РІ РєРѕСЂР·РёРЅСѓ
	$('.calendar_cart').click(function(){
		$(this).addClass('loading');
		
		var result = {};
		var cart_now = $(this).prev().prev().find('.calen_div_each');
		
		// Р”РѕР±Р°РІР»РµРЅРёРµ РІ РєРѕСЂР·РёРЅСѓ
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
	
	
	// РјРµРЅСЋ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ
	$(document).on('click', '.det_ul .active_days', function(){
		
		//РєР»Р°СЃСЃ РґР»СЏ С€Р°РїРєРё
		$(this).addClass('active').siblings().removeClass('active')
		
		//РєР»Р°СЃСЃ РґР»СЏ РєРѕРЅС‚РµРЅС‚Р°
		.closest('div.detail_nomin').find('div.det_content').removeClass('active').eq($(this).index()).addClass('active');	
		
		
		$(this).parent().find('.active_days').removeClass('border_day');
		$(this).addClass('border_day');
		
		var thiis = $(this).parent().parent();
		console.log($(this).parent().parent().find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text());
		var dte = $(this).parent().parent().find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text();
		var arr_dte = dte.split(' ');
		var arr_month = ['', 'СЏРЅРІР°СЂСЏ', 'С„РµРІСЂР°Р»СЏ', 'РјР°СЂС‚Р°', 'Р°РїСЂРµР»СЏ', 'РјР°СЏ', 'РёСЋРЅСЏ', 'РёСЋР»СЏ', 'Р°РІРіСѓСЃС‚Р°', 'СЃРµРЅС‚СЏР±СЂСЏ', 'РѕРєС‚СЏР±СЂСЏ', 'РЅРѕСЏР±СЂСЏ', 'РґРµРєР°Р±СЂСЏ'];
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
			
			// РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ, РѕР±РЅСѓР»РµРЅРёРµ СЃСѓРјРјС‹ РЅР°Рґ РєРЅРѕРїРєРѕР№ РєРѕСЂР·РёРЅС‹ РїСЂРё РїРµСЂРµРєР»СЋС‡РµРЅРёРё РґРЅРµР№
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
	
	// РјРµРЅСЋ РЅР° РґРµРЅСЊ, РєР»РёРє РїРѕ РєР°Р»РµРЅРґР°СЂСЋ
	$(document).on('click', '.day-contents', function(){
		
		var thiis = $(this);
		
		// РџРѕР»СѓС‡РµРЅРёРµ РґР°С‚С‹ РёР· СЃС‚СЂРѕРєРё
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
			// Р—Р°РїРёСЃСЊ РІ hidden Рё РІ С‚РµРєСѓС‰СѓСЋ РґР°С‚Сѓ Р°РґРјРёРЅР°
			$('.change_day_calendar').val(arr);
			$('.date_tek').text('');
			$('.date_tek').text('Р’С‹Р±СЂР°РЅРЅС‹Р№ РґРµРЅСЊ: ' + rest);

			// Р Р°РјРєР° РІ РєР°Р»РµРЅРґР°СЂРµ
			$(this).parents().parents().parents().find('.day-contents').css('border', 'none');
			$(this).css('border', '1px solid #aeaeae');
			
			$.ajax({
				url: '/local/ajax/add_calendar_admin.php',
				type: 'post',
				data: {'dt': rest, 'sect': $('.change_day_sect').val(), 'check': 'day_now', 'iblock': $('.change_day_iblock').val()},
				dataType: 'json',
				success: function(data){
					
					// РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РїРµСЂРµРєР»СЋС‡РµРЅРёРµ СЂР°РјРѕРє РІ РЅРµРґРµР»Рµ
					var all_week_day = thiis.closest('body');
					var this_week_day = thiis.closest('body').find('.detail_nomin .det_ul_cust [data-week="' + rest + '"]');				
					all_week_day.find('.detail_nomin .det_ul_cust li').removeClass('border_day');
					this_week_day.addClass('border_day');
					
					// Р’С‹РІРѕРґ Р°РґРјРёРЅ
					$('.configurator__row_not_all').html('');
					$('.configurator__row_not_all').append(data[0]);
					
					// Р’С‹РІРѕРґ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ
					all_week_day.find('.det_content_cust.active .conf_user_day').html('');
					all_week_day.find('.det_content_cust.active .conf_user_day').append(data[3]);
					
					// Р‘РµСЂРµРј СЃС‚СЂРѕРєСѓ СЃ РґРЅРµРј РЅРµРґРµР»Рё Рё РґР°С‚РѕР№
					var dte = all_week_day.find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text();
					// Р Р°Р·Р±РёРІР°РµРј
					var arr_dte = dte.split(' ');
					// РњР°СЃСЃРёРІ РґРЅРµР№ РЅРµРґРµР»Рё
					var arr_week = ['РїРѕРЅРµРґРµР»СЊРЅРёРє', 'РІС‚РѕСЂРЅРёРє', 'СЃСЂРµРґР°', 'С‡РµС‚РІРµСЂРі', 'РїСЏС‚РЅРёС†Р°', 'СЃСѓР±Р±РѕС‚Р°', 'РІРѕСЃРєСЂРµСЃРµРЅСЊРµ'];
					// РњР°СЃСЃРёРІ РјРµСЃСЏС†РµРІ
					var arr_month = ['', 'СЏРЅРІР°СЂСЏ', 'С„РµРІСЂР°Р»СЏ', 'РјР°СЂС‚Р°', 'Р°РїСЂРµР»СЏ', 'РјР°СЏ', 'РёСЋРЅСЏ', 'РёСЋР»СЏ', 'Р°РІРіСѓСЃС‚Р°', 'СЃРµРЅС‚СЏР±СЂСЏ', 'РѕРєС‚СЏР±СЂСЏ', 'РЅРѕСЏР±СЂСЏ', 'РґРµРєР°Р±СЂСЏ'];
					// РџРѕР»СѓС‡РµРЅРёРµ РґРЅСЏ РЅРµРґРµР»Рё РёР· СЂР°РјРєРё
					var day_week = thiis.parent().attr('class').substr(-1);
					// РџРѕР»СѓС‡РµРЅРёРµ РґРЅСЏ
					var day_day = rest.split('.');
					
					all_week_day.find('.detail_nomin .det_ul_cust').html('');
					all_week_day.find('.detail_nomin .det_ul_cust').append(data[4]);
					
					// Р—Р°РјРµРЅР° РґРЅСЏ РЅРµРґРµР»Рё Рё РјРµСЃСЏС†Р° Сѓ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
					all_week_day.find('.section.section--accordion.det_content_cust.active .section__header .section__title_calen_cust').text(arr_week[day_week] + ' ' + day_day[0] + ' ' + arr_month[parseInt(day_day[1])]);

					// РЎРєСЂС‹С‚РёРµ РєРЅРѕРїРєРё РїРѕРєСѓРїРєРё
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
	
	// РЈРґР°Р»РµРЅРёРµ Р±Р»СЋРґР° - Р°РґРјРёРЅ
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
				$('.header_add_del_admin').text('РўРѕРІР°СЂ СѓРґР°Р»РµРЅ РёР· РјРµРЅСЋ ' + data[1] + ' РЅР° ' + rest);
				
				setTimeout(function(){
					$('.header_add_del_admin').css('display', 'none');
				}, 2000);
			}
		});
	});
	
	// Р”РѕР±Р°РІР»РµРЅРёРµ Р±Р»СЋРґР° - Р°РґРјРёРЅ
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
				$('.header_add_del_admin').text('РўРѕРІР°СЂС‹ РґРѕР±Р°РІР»РµРЅС‹ РІ РјРµРЅСЋ ' + data[1] + ' РЅР° ' + rest);
				
				setTimeout(function(){
					$('.header_add_del_admin').css('display', 'none');
				}, 2000);
			}
		});
	});   
});