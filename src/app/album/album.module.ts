import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'',component:AlbumComponent},
      { path:'add',component:AlbumAddComponent},
      { path:'list',component:AlbumListComponent}
    ])
  ],
  declarations: [AlbumComponent, AlbumAddComponent, AlbumListComponent]
})
export class AlbumModule { }
