import { NgModule } from '@angular/core';
import { NgxMultiProgressBarComponent } from './ngx-multi-progress-bar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxMultiProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxMultiProgressBarComponent,
    CommonModule
  ]
})
export class NgxMultiProgressBarModule { }
