import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReportModule { }
