import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputeComponent } from './compute/compute/compute.component';
import { ImportComponent } from './import/import/import.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ReportComponent } from './report/report/report.component';

const routes: Routes = [
  { path: 'compute', component: ComputeComponent },
  { path: 'import', component: ImportComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'report', component: ReportComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
