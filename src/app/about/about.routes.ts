import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgreementComponent } from './agreement/agreement.component';
import { LinkComponent } from './link/link.component';
import { AboutMainComponent } from './about-main/about-main.component'

export const aboutRoutes = [
	{
		path:'',
		component:AboutMainComponent,
		children:[
			{ path:'', redirectTo:'us', pathMatch:'full'},
			{ path: 'us', component:AboutUsComponent},
      		{ path: 'contact', component:ContactUsComponent},
      		{ path: 'agreement', component:AgreementComponent},
      		{ path: 'link', component:LinkComponent}
      		{ path: '**', redirectTo:'us' }
		]
	}
]