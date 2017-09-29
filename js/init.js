$(document).ready(function() {
         
        //loader
        $(".loader").fadeOut("slow");

        if($(window).width() > 1600) {
          $('.flex-images').flexImages({rowHeight: 220, maxRows:4, truncate: true});
        }
        if($(window).width() < 1600) {
          $('.flex-images').flexImages({rowHeight: 170, maxRows:4, truncate: true});
        }
        //fancybox init
        $('[data-fancybox]').fancybox({
        });

        //tabs
         $( "#tabs" ).tabs({
          show: { effect: "fade", duration: 200 },
          hide: { effect: "fade", duration: 200 }
         });
        //timepicker
        $('.datetimepicker').datetimepicker({
        });

        jQuery.datetimepicker.setLocale('ru');
        $('.dotted').hover(function(){
          $(this).children('.dotted-box').fadeToggle(100).css('z-index','10');
        });

        // input number style
         jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
            jQuery('.quantity').each(function() {
              var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

              btnUp.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                  var newVal = oldValue;
                } else {
                  var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
              });

              btnDown.click(function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                  var newVal = oldValue;
                } else {
                  var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
              });

            });

        // ---
        $('.carousel-slider').slick({
          slidesToShow: 4,
          autoplay: true,
          slidesToScroll: 1,
           responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
        });

        //product slider

        $('.product-slider').slick({
          slidesToShow: 4,
          autoplay: true,
          slidesToScroll: 4,
           responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows:false
                }
              }
            ]
        });

        // product details slider
         $('.product-details-slider-big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          asNavFor: '.product-details-slider-min'
        });
        $('.product-details-slider-min').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.product-details-slider-big',
          arrows: false,
          focusOnSelect: true
        });

    	// mobile-nav icon
        $('#nav-icon').click(function(){
          $(this).toggleClass('open');
          $('.mobile-menu').fadeToggle();
        });
        $(document).mouseup(function (e){ 
          var div = $(".mobile-menu");
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) { 
            $('.mobile-menu').fadeOut();   
            $('#nav-icon').removeClass('open');  
          }
        });
      // phone mask
      $(function(){ 
          var mailcheck = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
          var telcheck = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
        
        $('input').focus(function(){
           $(this).attr('placeholder0', $(this).attr('placeholder') ); 
           $(this).attr('placeholder','').css({background:'' }); 
        });
        
        $('input').blur(function(){
          var ph = $(this).attr('placeholder0');  
          if (ph.length>0) {
            $(this).attr('placeholder',ph); 
          }
        });
          $('.phone').inputmask("mask", {"mask": "+7 (999) 999 99 99", 'placeholder':' '});
      });

});