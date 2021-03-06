import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
export const appRoutes = [
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},{
		path:'home',
		component:HomeComponent
	},{
		path:'course',
		loadChildren:'./course/course.module#CourseModule'
	},{
		path:'exam',
		loadChildren:'./exam/exam.module#ExamModule'
	},{
		path:'forum',
		loadChildren:'./forum/forum.module#ForumModule'
	},{
		path:'about',
		loadChildren:'./about/about.module#AboutModule'
	},{
		path:'album',
		loadChildren:'./album/album.module#AlbumModule'
	},{
		path:'mypage',
		loadChildren:'./mypage/mypage.module#MypageModule'
	},{
		path:'activity',
		loadChildren:'./activity/activity.module#ActivityModule'
	}
	// ,{
	// 	path:'**',//fallback router must in the last
	// 	loadChildren:'./home/home.module#HomeModule'
	// }
]