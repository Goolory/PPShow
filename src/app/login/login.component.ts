import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@Output()
  	public doLogin = new EventEmitter<string>();	

  	constructor() { }

  	ngOnInit() {
  	}
  	public doLoginBtnClick(){
  		this.doLogin.emit("doLogin");
  	}

}
