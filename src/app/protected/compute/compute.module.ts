import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComputeComponent } from './compute/compute.component';


@NgModule({
  declarations: [ComputeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComputeModule { }
