import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MypageComponent } from './mypage.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPwdComponent } from './user-pwd/user-pwd.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserPaperComponent } from './user-paper/user-paper.component';
import { UserClassManageComponent } from './user-class-manage/user-class-manage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    	{ path: '', component: MypageComponent},
    ])
  ],
  declarations: [MypageComponent, UserInfoComponent, UserPwdComponent, UserMessagesComponent, UserPaperComponent, UserClassManageComponent]
})
export class MypageModule { }
