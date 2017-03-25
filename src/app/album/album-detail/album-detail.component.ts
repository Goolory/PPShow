import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
	@Output()
  public doDetail = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }
  	public doDetailBtnClick(){
  		this.doDetail.emit("doDetail");
  	}

}
