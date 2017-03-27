import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-class-manage',
  templateUrl: './user-class-manage.component.html',
  styleUrls: ['./user-class-manage.component.css']
})
export class UserClassManageComponent implements OnInit {
	public addStudent : boolean;
  constructor() { 
  	this.addStudent = false;
  }

  ngOnInit() {
  }

  public removeAddPanel(){
  	this.addStudent =! this.addStudent;
  }
}
