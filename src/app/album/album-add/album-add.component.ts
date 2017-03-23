import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css']
})
export class AlbumAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(function(){ $(window).scrollTop(0)});
  	$("#file-1").fileinput({
        uploadUrl: '#', // you must set a valid URL here else you will get an error
        allowedFileExtensions : ['jpg', 'png','gif'],
        overwriteInitial: false,
        maxFileSize: 2000,
        maxFileCount: 9,
        minFileCount: 1,
        showUpload: true,
        showCaption: false,
        //allowedFileTypes: ['image', 'video', 'flash'],
        slugCallback: function(filename) {
            return filename.replace('(', '_').replace(']', '_');
        }
	});
  }

}
