import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(document).ready(function() {
        $('#summernote').summernote({
        	toolbar: [
          //[groupname, [button list]]
          ['图片',['picture']],
          ['para', ['ul', 'ol', 'paragraph']],
        ],
        height: 300,                 // set editor height
        minHeight: null,             // set minimum height of editor
        maxHeight: null,             // set maximum height of editor
        focus: false, 
      });
    });
  }

}
