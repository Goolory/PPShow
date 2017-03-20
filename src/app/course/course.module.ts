import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './course.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: CourseComponent}
    ])
  ],
  declarations: [CourseComponent]
})
export class CourseModule { }
