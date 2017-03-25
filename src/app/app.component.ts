import { Component } from '@angular/core';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public showTimes;
	public showCourse;
	public showPic;
	public doLogin;

	constructor() { 
  	this.showTimes = false;
  	this.showCourse = false;
  	this.showPic = false;
  	this.doLogin = false;
  }
	ngOnInit(){
		$(()=>{
			$(document).scroll(function(){
				let top = $("#top-navbar");
                let topHeight = top.offset().top;
                    if(topHeight > 20){
                    	top.addClass("rop-show");
                    }else{
                    	top.removeClass("rop-show");
                    }
            });
		});
		// wow动态载入函数部分
		var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
          // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      });
    wow.init();
	}
	public fooEnter(){
		this.showTimes =! this.showTimes;
	}
	public enterCourse(){
		this.showCourse =! this.showCourse;
	}
	public enterPic(){
		this.showPic =! this.showPic;
	}

}
