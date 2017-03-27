import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseVideoComponent } from './course-video/course-video.component';
import { VideoListComponent } from './video-list/video-list.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: CourseComponent},
    	{ path: 'list', component: VideoListComponent},
    	{ path: 'video', component: CourseVideoComponent}
    ])
  ],
  declarations: [CourseComponent, CourseVideoComponent, VideoListComponent]
})
export class CourseModule { }
