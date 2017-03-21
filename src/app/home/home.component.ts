import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
	styleUrls: ['./home.component.css','../../assets/homeimg/css/animate.css'],
 })
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// 初始化加载的函数部分
  	$(()=> {
			$('#dg-container').gallery({
				autoplay	:	true
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

}
