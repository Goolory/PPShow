import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';
import { AlbumAddComponent } from './album-add/album-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'',component:AlbumComponent},
      { path:'add',component:AlbumAddComponent}
    ])
  ],
  declarations: [AlbumComponent, AlbumAddComponent]
})
export class AlbumModule { }
