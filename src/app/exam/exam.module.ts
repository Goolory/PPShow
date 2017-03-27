import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam.component';
import { RouterModule} from '@angular/router';
import { ExamDetailComponent } from './exam-detail/exam-detail.component'
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: ExamComponent},
    	{ path: 'detail', component: ExamDetailComponent}
    ])
  ],
  declarations: [ExamComponent, ExamDetailComponent]
})
export class ExamModule { }
