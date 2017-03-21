import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'',component:AlbumComponent}
    ])
  ],
  declarations: [AlbumComponent]
})
export class AlbumModule { }
