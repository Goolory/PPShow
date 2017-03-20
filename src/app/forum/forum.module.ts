import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: ForumComponent}
    ])
  ],
  declarations: [ForumComponent]
})
export class ForumModule { }
