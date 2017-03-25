import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForumComponent } from './forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: ForumComponent},
    	{ path: 'detail', component:ForumDetailComponent}
    ])
  ],
  declarations: [ForumComponent, ForumDetailComponent]
})
export class ForumModule { }
