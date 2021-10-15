import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ImportModule } from './import/import.module';
import { ComputeModule } from './compute/compute.module';
import { ReportModule } from './report/report.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ImportModule,
    ComputeModule,
    ReportModule,
    ProfileModule
  ]
})
export class ProtectedModule { }
