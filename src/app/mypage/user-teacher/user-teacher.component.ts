import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-teacher',
  templateUrl: './user-teacher.component.html',
  styleUrls: ['./user-teacher.component.css']
})
export class UserTeacherComponent implements OnInit {
	public addPaper:boolean;
	public panelTitle:string;
  constructor() { 
  	this.addPaper = false;
  }

  ngOnInit() {
  }

  public addP(){
  	this.addPaper =! this.addPaper;
  	this.panelTitle = "添加试卷";
  }

  public addTest(){
  	this.addPaper =! this.addPaper;
  	this.panelTitle = "添加作业";
  }

}
