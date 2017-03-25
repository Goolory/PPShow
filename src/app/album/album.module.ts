import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'',component:AlbumComponent},
      { path:'add',component:AlbumAddComponent},
      { path:'list',component:AlbumListComponent},
      { path:'detail',component:AlbumDetailComponent}
    ])
  ],
  declarations: [AlbumComponent, AlbumAddComponent, AlbumListComponent, AlbumDetailComponent]
})
export class AlbumModule { }
