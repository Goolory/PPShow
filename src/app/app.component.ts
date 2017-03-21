import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public showTimes;

	constructor() { 
  	this.showTimes = null
  }
	ngOnInit(){

	}
	public fooEnter(){
		this.showTimes = true;
	}
	public fooOut(){
		this.showTimes = false;
	}
}
