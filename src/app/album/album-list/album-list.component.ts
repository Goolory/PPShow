import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
	public doDetail;

  constructor() { 
  	this.doDetail = false;
  }

  ngOnInit() {
  $("#my-gallery-container").mpmansory(
    {
      childrenClass: 'item', // default is a div
      columnClasses: '', //add classes to items
      breakpoints:{
        lg: 3, 
        md: 4, 
        sm: 6,
        xs: 12
      },
      distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, 
      onload: function (items) {
        //make somthing with items
      } 
    }
  );
  }

}
