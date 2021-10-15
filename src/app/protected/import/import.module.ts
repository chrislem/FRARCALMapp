import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [ImportComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ImportModule { }
