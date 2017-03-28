import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ActivityComponent } from './activity.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: ActivityComponent},
    	{ path: 'list', component: ListComponent}
    ])
  ],
  declarations: [ActivityComponent,ListComponent]
})
export class ActivityModule { }
