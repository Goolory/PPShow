import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgreementComponent } from './agreement/agreement.component';
import { LinkComponent } from './link/link.component';

import { aboutRoutes } from './about.routes';
import { AboutMainComponent } from './about-main/about-main.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [
  AboutUsComponent,
  AboutMainComponent,
  ContactUsComponent,
  AgreementComponent,
  LinkComponent

  ],
  exports:[
  	AboutMainComponent
  ]
})
export class AboutModule { }