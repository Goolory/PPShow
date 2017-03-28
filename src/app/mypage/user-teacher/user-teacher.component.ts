import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-teacher',
  templateUrl: './user-teacher.component.html',
  styleUrls: ['./user-teacher.component.css']
})
export class UserTeacherComponent implements OnInit {
	public addPaper:boolean;
  constructor() { 
  	this.addPaper = false;
  }

  ngOnInit() {
  }

}
