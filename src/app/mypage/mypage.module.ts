import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MypageComponent } from './mypage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: MypageComponent},
    ])
  ],
  declarations: [MypageComponent]
})
export class MypageModule { }
