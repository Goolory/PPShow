import { Component, OnInit } from '@angular/core';
declare var $: any;

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
    
  }

}
