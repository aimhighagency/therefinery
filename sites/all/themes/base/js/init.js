Drupal.behaviors.init = {
	attach: function (context, settings) {
		(function ($) {
 			
 			
			// MENU TWEAKS!!!
 			//===================================
 			$('.menu-toggle').click(function(){
				$('body').toggleClass('nav-open');
				return false;
			});

 			// BLOG IMAGE
 			//===================================
 			$('.body .image').parent().addClass('image-holder');

			// INTRO
 			//===================================
 			$('#intro .arrow').animate({
 					'margin-top' : 250,
 					'opacity' : 1	
 				}, 1000);


 			// LIST BOX
 			//===================================
 			var list_box_items = $('.list-box .item');

 			$('.list-box .item h2.trigger').click(function(event) {
 				$(this).next().slideToggle();
 				$('.list-box .item .body').not($(this).next()).slideUp();
 			});

 			// CYCLE GALLERY
 			//===================================
 			var	cycle_items = $('.cycle-gallery li'),
 					cycle_total = cycle_items.length,
 					cycle_current = 0, 
 					cycle_last = 0;

 			cycle_items.each(function(index, el) {
 				$(this).addClass('index-'+ index).hide();
 			});
 			$('.cycle-gallery .index-0').show();

 			function nextCycle(){
 				
 				cycle_last = cycle_current;
 				if(cycle_current == cycle_total - 1){
 					cycle_current = 0;
 				}else{
 					cycle_current++;
 				}

 				fadeCycle();
 			}

 			function fadeCycle(){
 				$('.cycle-gallery .index-' + cycle_current).fadeIn(200);
 				$('.cycle-gallery .index-' + cycle_last).fadeOut(200);
 			}

 			//setInterval(nextCycle, 1000);




 			// MASONRY!!!
 			//===================================
			// var masonry_container = $('.node-image-gallery .field-name-field-other-images');
			
			// masonry_container.imagesLoaded(function(){
			// 	masonry_container.masonry({
			// 	  itemSelector: '.field-item'
			// 	});
			// });


			// SCROLL MAGIC
 			//===================================
			var onCenterController = new ScrollMagic.Controller();
		   var onEnterController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
		   var onLeaveController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});


		   var logo_main = new ScrollMagic.Scene({triggerElement: "#intro", duration: "40%"})
        .setTween("#intro .logo", {'opacity': 0, ease: Linear.easeNone})
        .addTo(onLeaveController);

        var logo_main = new ScrollMagic.Scene({triggerElement: "#intro", duration: "40%"})
        .setTween("#intro h2", {'margin-top': 180, ease: Linear.easeNone})
        .addTo(onLeaveController);

        var logo_main = new ScrollMagic.Scene({triggerElement: "#intro", duration: "30%"})
        .setTween("#intro .arrow", {'opacity': 0, ease: Linear.easeNone})
        .addTo(onLeaveController);

		   var style_image_1 = new ScrollMagic.Scene({triggerElement: "#wisdom-style", duration: "200%"})
        .setTween("#wisdom-style .style-1", {'margin-top': "-46%", ease: Linear.easeNone})
        .addTo(onEnterController);

        var style_image_2 = new ScrollMagic.Scene({triggerElement: "#wisdom-style", duration: "200%"})
        .setTween("#wisdom-style .style-2", {'margin-top': "-42%", ease: Linear.easeNone})
        .addTo(onEnterController);

        var style_image_3 = new ScrollMagic.Scene({triggerElement: "#wisdom-style", duration: "200%"})
        .setTween("#wisdom-style .style-3", {'margin-top': "-10%", ease: Linear.easeNone})
        .addTo(onEnterController);

        var cross_right = new ScrollMagic.Scene({triggerElement: "#it-is-not", duration: "200%"})
        .setTween("#it-is-not .bar.right", {'top': -200, ease: Linear.easeNone})
        .addTo(onEnterController);

        var cross_left = new ScrollMagic.Scene({triggerElement: "#it-is-not", duration: "200%"})
        .setTween("#it-is-not .bar.left", {'top': -400, ease: Linear.easeNone})
        .addTo(onEnterController);

        var cta_1_quote = new ScrollMagic.Scene({triggerElement: "#cta-1", duration: "200%"})
        .setTween("#cta-1 .quote", {'top': '40%', ease: Linear.easeNone})
        .addTo(onEnterController);

        var cta_1_quote = new ScrollMagic.Scene({triggerElement: "#cta-1 .arrow", duration: "200%"})
        .setTween("#cta-1 .arrow", {'margin-top': 500, ease: Linear.easeNone})
        .addTo(onEnterController);


		}(jQuery));
	}	
}













