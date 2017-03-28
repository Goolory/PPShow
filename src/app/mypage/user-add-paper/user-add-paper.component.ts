import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user-add-paper',
  templateUrl: './user-add-paper.component.html',
  styleUrls: ['./user-add-paper.component.css']
})
export class UserAddPaperComponent implements OnInit {
	@Input()
    public panelTitle:string;

    @Output()
    public remove = new EventEmitter<string>();
    
  constructor() { }

  ngOnInit() {
  }

  public removePanel(){
  	this.remove.emit("remove");
  }

}
