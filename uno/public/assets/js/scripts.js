

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


function _viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]};
}

function _getWidthViewport() {
    return _viewport().width;
}


function btnMenuResponsiveTop() {
    var top = $(".top_menu"),
            btn = $(".menu_top_js"),
            bar_1 = btn.find("#bar_1"),
            bar_2 = btn.find("#bar_2"),
            bar_3 = btn.find("#bar_3"),
            menu = $('.menu-top-mobile'),
            menu_ul = menu.find("ul"),
            body = $('body');

    btn.on("click", function (e) {
        e.preventDefault();
        var self = $(this);
        if (!self.hasClass("active")) {

            body.addClass("menu-open");
            menu.addClass("active").fadeIn("slow");
            TweenLite.to(menu_ul, 0.45, {top: 0});

            self.addClass("active");
            setTimeout(function () {
                top.addClass("active");
            }, 250);
            TweenLite.to(top, 0.45, {
                height: '47px'
            });
            TweenLite.to(bar_1, 0.45, {
                rotation: 45, x: 5.9
            });
            TweenLite.to(bar_2, 0.45, {
                opacity: 0,
            });
            TweenLite.to(bar_3, 0.45, {
                rotation: -45, x: 2.8, y: 4.8
            });
        } else {
            body.removeClass("menu-open");
            menu.removeClass("active").fadeOut("slow");
            TweenLite.to(menu_ul, 0.45, {top: '100px'});

            self.removeClass("active");
            top.removeClass("active");
            TweenLite.to(top, 0.45, {
                height: 0
            });
            TweenLite.to(bar_1, 0.45, {
                rotation: 0, x: 0
            });
            TweenLite.to(bar_2, 0.45, {
                opacity: 1
            });
            TweenLite.to(bar_3, 0.45, {
                rotation: 0, x: 0, y: 0
            });
        }

    });
}


function carruselPhonesMobil() {

	var slider = $(".phones-mobile-js");
    
    if(_getWidthViewport() <= 767) {

        var slider = $(".phones-mobile-js"),
            item = slider.find(".item"),
            speed = 550;

        if (slider.length > 0) { 
            slider.addClass("owl-carousel");    
            slider.owlCarousel({
                items: 1,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 3500,
                dots: false,
                nav: true,
                slideBy: 1,
                callbacks: true,
                smartSpeed: speed,
                touchDrag: Modernizr.touch ? true : false,
                mouseDrag: Modernizr.touch ? true : false,
                pullDrag: Modernizr.touch ? true : false,
                loop: true,
                navText: ['<i class="icon-chevron-thin-left"></i>', '<i class="icon-chevron-thin-right"></i>']                
            });
        }

    }else{
        slider.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        slider.find('.owl-stage-outer').children().unwrap();
	}
}


function carruselMarcas() {

	var slider = $(".client-carrusel-js"),
	        item = slider.find(".client-item"),
	        btn_prev = slider.parents(".wrapper-clients").find('.navigation-js.prev'),
	        btn_next = slider.parents(".wrapper-clients").find('.navigation-js.next'),
	        speed = 550;

	if (slider.length > 0) {

	    slider.owlCarousel({
	        autoplay: false,
	        autoplayHoverPause: true,
	        autoplayTimeout: 5000,
	        dots: false,
	        nav: false,
	        slideBy: 1,
	        callbacks: true,
	        smartSpeed: speed,
	        touchDrag: Modernizr.touch ? true : false,
	        mouseDrag: Modernizr.touch ? true : false,
	        pullDrag: Modernizr.touch ? true : false,
	        lazyLoad: false,
	        loop: true,
	        responsive: {
	            0: {
	                items: 1
	            },
	            480: {
	                items: 2
	            },
	            561: {
	                items: 3
	            },
	            768: {
	                items: 4
	            },
	            1024: {
	                items: 4
	            }
	        }
	    });

	    if (item.length > 0) {

	        btn_prev.on("click", function () {
	            slider.trigger('prev.owl');
	        });
	        btn_next.click(function () {
	            slider.trigger('next.owl');
	        });
	    } else {
	        TweenLite.set(btn_prev, {
	            autoAlpha: 0
	        });
	        TweenLite.set(btn_next, {
	            autoAlpha: 0
	        });
	    }
	}
}

function menuHeaderResponsivoDropdown(){
	var btn = $(".btn-header-js"),
	menu = $("#menu"),
	dropdown = menu.find("ul");

	btn.on("click", function(){
		var self = $(this);
		if(!menu.hasClass("active")){
			menu.addClass("active");
		}else{
			menu.removeClass("active");
		}
	});

	$(window).click(function () {
        if(menu.hasClass("active")){
			menu.removeClass("active");
		}
    });
    btn.click(function (e) {
        e.stopPropagation();
    });
}

function accordion(){
    var accordion = $('.accordion'),
        accordionTitle = accordion.find('.accordion-title'),
        accordionContent = $('.accordion-content');

    accordionTitle.on('click', function(){
        var self = $(this),
            selfAccordion = self.parent('.accordion'),
            selfContent = selfAccordion.find('.accordion-content');
     
        if(!selfAccordion.hasClass('active')){
            accordion.removeClass('active');
            TweenLite.to(accordionContent, 0.5, {'opacity': '0', top: '15px', ease: Power4.easeInOut});    
            accordionContent.slideUp();

            selfAccordion.addClass('active');
            selfContent.slideDown('fast');
            TweenLite.to(selfContent, 0.5, {delay: 0.2, 'opacity': '1', top: 0, ease: Power4.easeInOut});    
        }else{
            selfAccordion.removeClass('active');
            TweenLite.to(selfContent, 0.5, {'opacity': '0', top: '15px', ease: Power4.easeInOut});    
            setTimeout(function(){selfContent.slideUp()}, 100);
        }         
    });
}


function carruselPaquetes(){

	var sliders = $(".boxes-slider-mobile-js");
    
	if(_getWidthViewport() <= 767) {
		
		sliders.each(function(){
			var slider = $(this),
				item = slider.find(".box"),
		        speed = 550;

			if (slider.length > 0) {
				slider.addClass("owl-carousel");
			    slider.owlCarousel({
			        autoplay: false,
			        autoplayHoverPause: true,
			        autoplayTimeout: 5000,
			        dots: false,
			        nav: true,
			        slideBy: 1,
			        callbacks: true,
			        smartSpeed: speed,
			        touchDrag: Modernizr.touch ? true : false,
			        mouseDrag: Modernizr.touch ? true : false,
			        pullDrag: Modernizr.touch ? true : false,
			        loop: true,
			        items: 1,



			        margin: 40,


			        autoWidth:true,
                    navText: ['<i class="icon-chevron-thin-left"></i>', '<i class="icon-chevron-thin-right"></i>']
			    });
			}
		});

	}else{
		sliders.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    	sliders.find('.owl-stage-outer').children().unwrap();
	}
}

function _show(id, xo) {
    TweenLite.to($(id), 1, {css: {'opacity': '1', top: '0', scaleX: 1, scaleY: 1}, ease: Power4.easeInOut, delay: xo});
}

function appear() {
    if (Modernizr.touch) {

        TweenLite.to($(".apear-js"), 0.5, {'opacity': '1', top: '0'});

    } else {

        // BLOQUE DE TEXTO CON BACKGROUND IMAGE
        $('.section-image:eq(0) .apear-js:eq(0)').waypoint(function () {
            _show($('.section-image:eq(0) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.section-image:eq(1) .apear-js:eq(0)').waypoint(function () {
            _show($('.section-image:eq(1) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.section-image:eq(2) .apear-js:eq(0)').waypoint(function () {
            _show($('.section-image:eq(2) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.section-image:eq(3) .apear-js:eq(0)').waypoint(function () {
            _show($('.section-image:eq(3) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});


        // FORMULARIO DE BUSQUEDA DE DOMINIOS
        
        $('.wrapper-form-dominio').waypoint(function () {
            _show($('.wrapper-form-dominio'), 0.5);
        }, {offset: '98%'});        

        // BLOQUE RESULTADOS - DOMINIOS
        $('.wrapper-results ').waypoint(function () {
            _show($('.wrapper-results'), 0.5);
        }, {offset: '100%'});        


    	// BLOQUE: PORQUE ESCOGER YACHAY
        $('.why .apear-js:eq(0)').waypoint(function () {
            _show($('.why .apear-js:eq(0)'), 0);
        }, {offset: '90%'});
        $('.why-items .apear-js:eq(0)').waypoint(function () {
            _show($('.why-items .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.why-items .apear-js:eq(1)').waypoint(function () {
            _show($('.why-items .apear-js:eq(1)'), 0.4);
        }, {offset: '88%'});
        $('.why-items .apear-js:eq(2)').waypoint(function () {
            _show($('.why-items .apear-js:eq(2)'), .8);
        }, {offset: '88%'});


        // BLOQUES: BOX DE PRECIOS
        // BLOQUE 1
        $('.wrapper-prices:eq(0) .apear-js:eq(0)').waypoint(function () {
            _show($('.wrapper-prices:eq(0) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(0) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-prices:eq(0) .apear-js:eq(1)'), 0.4);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(0) .apear-js:eq(2)').waypoint(function () {
            _show($('.wrapper-prices:eq(0) .apear-js:eq(2)'), 0.8);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(0) .apear-js:eq(3)').waypoint(function () {
            _show($('.wrapper-prices:eq(0) .apear-js:eq(3)'), 0.8);
        }, {offset: '88%'});

        // BLOQUE 2
        $('.wrapper-prices:eq(1) .apear-js:eq(0)').waypoint(function () {
            _show($('.wrapper-prices:eq(1) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(1) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-prices:eq(1) .apear-js:eq(1)'), 0.4);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(1) .apear-js:eq(2)').waypoint(function () {
            _show($('.wrapper-prices:eq(1) .apear-js:eq(2)'), 0.8);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(1) .apear-js:eq(3)').waypoint(function () {
            _show($('.wrapper-prices:eq(1) .apear-js:eq(3)'), 0.8);
        }, {offset: '88%'});

        // BLOQUE 3
        $('.wrapper-prices:eq(2) .apear-js:eq(0)').waypoint(function () {
            
            _show($('.wrapper-prices:eq(2) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(2) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-prices:eq(2) .apear-js:eq(1)'), 0.4);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(2) .apear-js:eq(2)').waypoint(function () {
            _show($('.wrapper-prices:eq(2) .apear-js:eq(2)'), 0.8);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(2) .apear-js:eq(3)').waypoint(function () {
            _show($('.wrapper-prices:eq(2) .apear-js:eq(3)'), 0.8);
        }, {offset: '88%'});

        // BLOQUE 4
        $('.wrapper-prices:eq(3) .apear-js:eq(0)').waypoint(function () {
            
            _show($('.wrapper-prices:eq(3) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(3) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-prices:eq(3) .apear-js:eq(1)'), 0.4);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(3) .apear-js:eq(2)').waypoint(function () {
            _show($('.wrapper-prices:eq(3) .apear-js:eq(2)'), 0.8);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(3) .apear-js:eq(3)').waypoint(function () {
            _show($('.wrapper-prices:eq(3) .apear-js:eq(3)'), 1.2);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(3) .apear-js:eq(4)').waypoint(function () {
            _show($('.wrapper-prices:eq(3) .apear-js:eq(4)'), 1.6);
        }, {offset: '88%'});

        

        // BLOQUES INFORMATIVOS
        // BLOQUE 1
        $('.wrapper-info:eq(0) .apear-js:eq(0)').waypoint(function () {
            _show($('.wrapper-info:eq(0) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-info:eq(0) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-info:eq(0) .apear-js:eq(1)'), 0.6);
        }, {offset: '88%'});

        // BLOQUE 2
        $('.wrapper-info:eq(1) .apear-js:eq(0)').waypoint(function () {
            _show($('.wrapper-info:eq(1) .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-info:eq(1) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-info:eq(1) .apear-js:eq(1)'), 0.6);
        }, {offset: '88%'});

        // BLOQUE 3
        $('.revisa .apear-js:eq(0)').waypoint(function () {
            _show($('.revisa .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-prices:eq(2) .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-prices:eq(2) .apear-js:eq(1)'), 0.6);
        }, {offset: '88%'});

        //BLOQUE CLIENTES
        $('.wrapper-clients .apear-js:eq(0)').waypoint(function () {
            _show($('.wrapper-clients .apear-js:eq(0)'), 0);
        }, {offset: '88%'});
        $('.wrapper-clients .apear-js:eq(1)').waypoint(function () {
            _show($('.wrapper-clients .apear-js:eq(1)'), 0.6);
        }, {offset: '88%'});

        // BLOQUE AYUDA
        // $('.help').waypoint(function () {
        //     _show($('.help'), 0);
        // }, {offset: '88%'});

        // BLOQUE NEWSLETTER
        // $('.newsletter').waypoint(function () {
        //     _show($('.newsletter'), 0);
        // }, {offset: '88%'});

        // BLOQUE NEWSLETTER
        // $('.w_up').waypoint(function () {
        //     _show($('.w_up'), 0);
        // }, {offset: '88%'});

        // BLOQUE FOOTER
        // $('footer').waypoint(function () {
        //     _show($('footer'), 0);
        // }, {offset: '88%'});
    }
}


function topFixed() {
    var menu = $("#menu");
    
    $(".section").eq(0).waypoint(function(direction) {
        
        if (direction === "down") {
        	menu.addClass("fixed");
        } else {
            menu.removeClass("fixed");
        }
    }, {offset: 0});

}

function popup(){
    var overlay = $(".overlay"),
    body = $("body"),
    popup = $(".wrapper-popup "),
    btnOpen = $(".btn-open-popup-js"),
    btnClose = $(".btn-close-popup-js");

    btnOpen.on("click", function(e){
        e.preventDefault();

        var self = $(this),
        selfTarget = self.data("target");

        if(!$("#" + selfTarget).length){
            return false;  
        }

        $("#" + selfTarget).addClass("active");
        body.addClass("overflow");

    });
    btnClose.on("click", function(e){
        e.preventDefault();

        overlay.removeClass("active");
        body.removeClass("overflow");

    });

    $(window).click(function () {
        if(body.hasClass("overflow")){
            overlay.removeClass("active");
            body.removeClass("overflow");
        }
    });
    btnOpen.click(function (e) {
        e.stopPropagation();
    });
    popup.click(function (e) {
        e.stopPropagation();
    });
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}



function scrollSpy() {
    var lastId,
            menuItems_top = $("#menu .btn-navigation-scroll-js"),
            menuItems = $(".btn-navigation-scroll-js"),
            scrollItems = menuItems_top.map(function() {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });

    var find = '/';
    var re = new RegExp(find, '');
    var jash = replaceAll(location.hash, '/', '');

    if (jash !== "" && $(jash).length === 1) {

        var offsetTop = jash === "#" ? 0 : $(jash).offset().top + 1;

    }

    menuItems.click(function(e) {

        var href = $(this).attr("href");
        if ($(href).length === 1) {

            var offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
            if (offsetTop !== 0) {

                e.preventDefault();

                TweenLite.to($(window), 1, {scrollTo: {y: $(href).offset().top}, ease: Expo.easeInOut});	
            }
        }
    });
    $(window).scroll(function() {
        var self = $(this);
        var fromTop = self.scrollTop();
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop + 1)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;

            // Set/remove active class
            menuItems.removeClass("active");
            if ($("#" + id).length === 1) {
                $("a[href=#" + id + "]").addClass("active");
            }
        }
    });
}


function sliderHome(){
    var slider = $('.tp-banner');
    if (slider.length) {

        var rev = slider.revolution({
            delay: 4000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 200,
            fullWidth: "off",
            fullScreen: "on",
            spinner: "spinner4",
            navigationStyle: "preview4",
            navigationType: "none",
            onHoverStop: "off",
            hideTimerBar: "on"
        });

        rev.on('revolution.slide.onloaded', function() {
            slider.addClass('loaded');
        });
    }
}

function parallax(){
    var parallax = $(".parallax-container").find(".parallax");
    var ele = $('.parallax');
    if(!Modernizr.touch){
        ele.parallax();    
    }
    else{
        parallax.each(function(){
            var self = $(this);
            selfParentSection = self.parents(".section");
            selfImg = self.find("img");

            if(selfParentSection.length){
                selfParentSection.css({"background": 'url('+ selfImg.attr("src") +')', 'backgroundSize': 'cover', 'backgroundPosition': '50%'});    
            }
        })
    }
}

function onChangeSelect(ele){
    ele.on('change', function(){
        var self = $(this);    
        var parent = self.parents('.form-w-select');
        var label_error = parent.find('label.error');
        if(this.value !== ''){
            parent.removeClass('error');
            label_error.hide();
        }
    });
}

function selectStyled(){
    var ele = $('.selectize-js');
    ele.selectize();
    onChangeSelect(ele);
}


function validateFormSearchDomain(){
    $.validator.addMethod("regex", function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }, "");

    var form = $("#form-search-domains");
    form.validate({
        ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
        debug: false,
        rules: {
            dominio: {
                required: true,
                regex: '^[a-zA-Z-0-9]+$'
            },
            zona: {
                required: true
            }
        },
        messages: {
            dominio: {
                required: "Ingresa un nombre de dominio",
                regex: 'El dato no es válido'
            },
            zona: {
                required: "Selecciona la zona"
            }
        },
        highlight: function (element) {
            $(element).parent('div').addClass('error');
            $(element).addClass('error');
        },
        unhighlight: function (element) {
            $(element).parent('div').removeClass('error');
            $(element).removeClass('error');
        }

    });      
}

function OverlayVideo () {
    var ele = $('.btn-video-js'),
    overlay = $('.overlay-js'),
    btn_close = overlay.find('.btn-close-js'),
    wrapperVideo = $('.popup-video-container');
    if(ele.length > 0){
    
        ele.on('click',function () {
            var self = $(this),
            selfType = self.data('type'),
            selfIDVideo = self.data('idvideo'), // para el caso de video-html5 es la url relativa al video mp4.
            outputVideo = '';
            if (!self.hasClass('active')) {
                self.addClass('active');
                overlay.addClass('active');
                if(selfIDVideo == '' ||  selfType == ''){
                        return;
                }
                switch(selfType) {
                    case 'youtube':
                        outputVideo = '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+ selfIDVideo +'?autoplay=1" frameborder="0" allowfullscreen></iframe>';

                        break;
                    case 'vimeo':
                        outputVideo = '<iframe src="https://player.vimeo.com/video/' + selfIDVideo + '?autoplay=1" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

                        break;
                    case 'videohtml5':
                        outputVideo = '<video controls="controls" autoplay><source src="' + selfIDVideo + '" type="video/mp4" /></video>';
                        break;
                }
                wrapperVideo.append(outputVideo);
            } else {
                self.removeClass('active');
                overlay.removeClass('active');
            };
        })
        btn_close.on('click',function () {
            if (overlay.hasClass('active')) {
                ele.removeClass('active');
                overlay.removeClass('active');
                wrapperVideo.html('');
            }
        });

        $(window).on('click', function(){
             if (overlay.hasClass('active')) {
                ele.removeClass('active');
                overlay.removeClass('active');
                wrapperVideo.html('');
            }
        });
        ele.on('click',function (e) {
            e.stopPropagation();
        });
        wrapperVideo.on('click',function (e) {
            e.stopPropagation();
        });
    }
}



var bPaquetes,
bPhones;
$(window).resize( function() {

  clearTimeout(bPaquetes);
  clearTimeout(bPhones);
  bPaquetes = setTimeout(carruselPaquetes, 300);
  bPhones = setTimeout(carruselPhonesMobil, 300);
});

$(document).ready(function(){
    sliderHome();
	scrollSpy();
    popup();
	topFixed();
	carruselPaquetes();
	carruselMarcas();
	btnMenuResponsiveTop();
	menuHeaderResponsivoDropdown();
	appear();
	carruselPhonesMobil();
    parallax();
    accordion();
    selectStyled();
    validateFormSearchDomain();
    OverlayVideo();
});