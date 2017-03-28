import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		$("#danmup").DanmuPlayer({
	    src: "../../../assets/videos/oceans.mp4", //视频源 
	    height: "480px", //区域的高度 
	    width: "800px", //区域的宽度 
		}); 
  }


}
