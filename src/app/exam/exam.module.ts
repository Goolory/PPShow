import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam.component';
import { RouterModule} from '@angular/router'
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: ExamComponent}
    ])
  ],
  declarations: [ExamComponent]
})
export class ExamModule { }
