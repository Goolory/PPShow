import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['../../assets/pbl/css/animate.css','../../assets/pbl/css/magnific-popup.css'
  			,'../../assets/pbl/css/salvattore.css','../../assets/pbl/css/style.css','./album.component.css']
})
export class AlbumComponent implements OnInit {
public loved;
public loveCount;
  constructor() {
  this.loved = [false,false];
  this.loveCount = [0,0]; 
}

	public lovedEnter(i:any){
		this.loved[i] = true;
		this.loveCount[i] ++;
	}
  ngOnInit() {
  	// this.loved = false;
 

 (function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// OffCanvass
	var offCanvass = function() {
		$('body').on('click', '.js-fh5co-menu-btn, .js-fh5co-offcanvass-close', function(){
			$('#fh5co-offcanvass').toggleClass('fh5co-awake');
		});
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
	    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
	    	}
	    }
		});

		$(window).scroll(function(){
			if ( $(window).scrollTop() > 500 ) {
				if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
		    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
		    	}
	    	}
		});
	};

	// Magnific Popup
	
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			titleSrc: 'title',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};



	var animateBoxWayPoint = function() {

		if ($('.animate-box').length > 0) {
			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {
					$(this.element).addClass('bounceIn animated');
				}

			} , { offset: '75%' } );
		}

	};

	

	
	$(function(){
		$(window).scrollTop(0);
		magnifPopup();
		offCanvass();
		mobileMenuOutsideClick();
		// animateBoxWayPoint();
	});
	$()


}());

  	
  }

}
